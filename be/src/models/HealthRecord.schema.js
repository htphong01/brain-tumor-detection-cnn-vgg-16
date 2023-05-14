const mongoose = require('mongoose');
const { Schema } = mongoose;

const healthRecordSchema = new Schema(
  {
    patient: { type: Schema.Types.ObjectId, ref: 'Patient', require: true },
    doctor: { type: Schema.Types.ObjectId, ref: 'User', require: true },
    testResult: [{ type: Schema.Types.ObjectId, 'ref': 'TestResult' }],
    info: { type: Schema.Types.Mixed },
  },
  {
    timestamps: true,
  }
);

module.exports = healthRecordSchema;
