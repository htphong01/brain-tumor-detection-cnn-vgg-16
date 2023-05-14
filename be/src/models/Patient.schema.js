const mongoose = require("mongoose");
const { Schema } = mongoose;

const patientSchema = new Schema({
  name: { type: String, required: true, indexed: true },
  phoneNumber: { type: String },
  idCard: { type: String },
  birth: { type: Number },
  gender: { type: String },
  info: { type: Schema.Types.Mixed },
}, {
  timestamps: true
})

module.exports = patientSchema;
