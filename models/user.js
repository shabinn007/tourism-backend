/** @format */

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  email: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  phone: {
    type: mongoose.Schema.Types.Number,
    required: false,
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  isAdmin: {
    type: mongoose.Schema.Types.Boolean,
    default: false,
  },
});

export default userSchema;
