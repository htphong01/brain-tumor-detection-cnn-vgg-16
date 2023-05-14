require("dotenv").config();
const mongoose = require("mongoose");

const DB_CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@personal.jxtjoyv.mongodb.net/brain-tumor-detector?retryWrites=true&w=majority`

const connectDB = () => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(DB_CONNECTION_URL);
};

module.exports = connectDB;
