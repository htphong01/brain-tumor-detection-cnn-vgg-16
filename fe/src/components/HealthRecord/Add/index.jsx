import { useState } from "react";
import { MODAL_TYPES } from "@src/constants";
import styles from "./styles.module.scss";
import { Icon } from "@iconify/react";
import { uploadImageToCloud } from "@utils/cloudinary";
import { getVggOutput } from "@api/vgg";
import ReactLoading from "react-loading";
import toast from "@utils/toast";

export default function Add({
  setIsOpenAdd,
  handleSubmit,
  type,
  selectedHealthRecord,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [testResult, setTestResult] = useState({
    input: "",
    output: "",
    isPositive: false,
  });

  const handleChangeFile = (e) => {
    setSelectedFile(e.target.files[0]);
    setTestResult({ ...testResult, output: "" });
  };

  const handleGetOutput = async () => {
    try {
      setIsLoading(true);
      const [res1, res2] = await Promise.all([
        uploadImageToCloud(selectedFile),
        getVggOutput(selectedFile),
      ]);
      const newTestResult = {
        input: res1.data.url,
        output: res1.data.url,
        isPositive: res2.data[0] === "YES" ? true : false,
      };
      setTestResult(newTestResult);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
      toast.error(error?.response?.statusText);
    }
  };

  const handleSubmitForm = () => {
    if (Object.values(testResult).includes("")) return;
    handleSubmit({
      ...testResult,
      healthRecord: selectedHealthRecord._id,
    });
  };

  return (
    <>
      {isLoading && (
        <div className="loading">
          <ReactLoading
            type="spinningBubbles"
            color="#ffffff"
            height={60}
            width={60}
          />
        </div>
      )}
      <div className={styles.container}>
        <div className={styles["form-block"]}>
          <div className={styles.title}>
            {MODAL_TYPES.EDIT === type ? "Add new test result" : "Test result"}
          </div>
          <div className={styles.body}>
            <div className={styles.inputControl}>
              <label className={styles.inputTitle}>Input:</label>
              <label className={styles.inputLabel}>
                <input
                  type="file"
                  name="input"
                  accept="image/*"
                  onChange={handleChangeFile}
                  required
                  hidden
                />
                {type === MODAL_TYPES.EDIT ? (
                  selectedFile && (
                    <img src={URL.createObjectURL(selectedFile)} />
                  )
                ) : (
                  <img src={selectedHealthRecord.testResult[0].input} />
                )}
              </label>
            </div>
            <div className={styles.convertBtn} onClick={handleGetOutput}>
              <Icon icon="ep:right" fontSize={20} />
            </div>
            <div className={styles.inputControl}>
              <label className={styles.inputTitle}>
                Output:{" "}
                {type === MODAL_TYPES.EDIT ? (
                  testResult.output && (
                    <span>
                      {testResult.isPositive ? "Positive" : "Negative"}
                    </span>
                  )
                ) : (
                  <span>
                    {selectedHealthRecord.testResult[0].isPositive
                      ? "Positive"
                      : "Negative"}
                  </span>
                )}
                {}
              </label>
              <label
                className={`${styles.inputLabel} ${
                  testResult.output
                    ? testResult.isPositive
                      ? styles.positive
                      : styles.negative
                    : ""
                }`}
              >
                {type === MODAL_TYPES.EDIT ? (
                  testResult.output && (
                    <img src={URL.createObjectURL(selectedFile)} />
                  )
                ) : (
                  <img src={selectedHealthRecord.testResult[0].output} />
                )}
              </label>
            </div>
          </div>
          <div className={styles.footer}>
            <button
              className={styles.cancelBtn}
              onClick={() => setIsOpenAdd(false)}
            >
              Cancel
            </button>
            <button className={styles.submitBtn} onClick={handleSubmitForm}>
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
