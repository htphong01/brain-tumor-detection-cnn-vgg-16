import os
import sys
sys.path.insert(0, './models/research')
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing.image import img_to_array
from object_detection.utils import label_map_util
from PIL import Image
import cv2
from flask import Flask, request, jsonify
import json
import base64

app = Flask(__name__)

# Load the VGG-16 model
vgg_model = tf.keras.models.load_model('./output/models/VGG_model_better.h5')

# Load the label map
label_map_path = './output/records/classes.pbtxt'
label_map = label_map_util.create_category_index_from_labelmap(label_map_path, use_display_name=True)


def resize_image(image_np, size):
    # Resize the image_np array to the specified size
    resized_image_np = np.array(Image.fromarray(image_np).resize(size))
    return resized_image_np


def run_tumor_detection(image_np):
    # Perform inference with the VGG-16 model
    predictions = vgg_model.predict(np.expand_dims(image_np, axis=0))
    class_index = [2 if x > 0.5 else 1 for x in predictions]
    class_labels = []
    for index in class_index:
        class_label = label_map[index]['name']
        class_labels.append(class_label)
        # Crop and resize the tumor area if the class label is 'YES'
    if 'YES' in class_labels:
        # Perform the necessary cropping and resizing operations on the image
        # to obtain the tumor area as a new_image array of size 224x224
        # Example code:
        gray_img = cv2.cvtColor(image_np, cv2.COLOR_RGB2GRAY)
        _, threshold_img = cv2.threshold(gray_img, 1, 255, cv2.THRESH_BINARY)
        contours, _ = cv2.findContours(threshold_img, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        x, y, w, h = cv2.boundingRect(contours[0])
        startX, startY, endX, endY = x, y, x + w, y + h

        # Visualize the bounding box on the original image
        cv2.rectangle(image_np, (startX, startY), (endX, endY), (0, 255, 0), 2)

    # Prepare the detection results
    detection_results = {
        'class_labels': class_labels,
        # 'image_np': image_np.tolist()  # Convert the numpy array to a list for JSON serialization
    }

    return class_labels


@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image found in the request'})
    # Read and preprocess the image
    image_file = request.files['image']
    img = Image.open(image_file)
    img = img.resize((224, 224))
    img_array = img_to_array(img)
    img_array = tf.keras.applications.vgg16.preprocess_input(img_array)

    # Perform tumor detection
    detection_results = run_tumor_detection(img_array )

    # # Convert the image to base64 for JSON serialization
    # image_base64 = base64.b64encode(img_array ).decode('utf-8')

    # Add image_base64 to detection results
    # detection_results['image_base64'] = image_base64

    # Return the detection
    return jsonify(detection_results)


if __name__ == '__main__':
    app.run()