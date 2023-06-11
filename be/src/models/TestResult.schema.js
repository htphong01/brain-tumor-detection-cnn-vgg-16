const mongoose = require('mongoose');
const { Schema } = mongoose;

const testResultSchema = new Schema(
  {
    healthRecord: { type: Schema.Types.ObjectId, ref: 'HealthRecord', required: true },
    input: { type: String, required: true },
    output: { type: String, required: true  },
    isPositive: { type: Boolean }
  },
  {
    timestamps: true,
  }
);

module.exports = testResultSchema;
