const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ROLES } = require("../constants/enums");
const { DEFAULT_AVATAR } = require('../constants/variables')
const bcrypt = require('../utils/bcrypt.utils');

const userSchema = new Schema(
  {
    code: { type: String, required: true, unique: true, indexed: true },
    username: { type: String, unique: true, required: true, indexed: true },
    password: { type: String, required: true},
    name: { type: String, required: true, indexed: true },
    gender: { type: String, required: true, indexed: true },
    avatar: { type: String, default: DEFAULT_AVATAR },
    info: { type: Schema.Types.Mixed },
    role: { type: String, required: true, enum: ROLES, default: ROLES.EMPLOYEE }
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', function(next) {
  this.password = bcrypt.hash(this.password);
  next();
})

module.exports = userSchema;
