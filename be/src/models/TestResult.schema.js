const mongoose = require('mongoose');
const { Schema } = mongoose;

const testResultSchema = new Schema(
  {
    healthRecord: { type: Schema.Types.ObjectId, ref: 'HealthRecord', required: true },
    url: { type: Schema.Types.Array, default: [], required: true  },
    isPositive: { type: Boolean }
  },
  {
    timestamps: true,
  }
);

module.exports = testResultSchema;
