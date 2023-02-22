/** @format */

import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
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
    required: true,
    validate: {
      validator: v => isValidMobileNumber(v),
      message: "Invalid mobile number",
    },
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: true,
    maxLength: [225, { message: "Your password cannot exceed 225 characters" }],
    minLength: [
      6,
      { message: "Your password should be contain minimum 6 characters" },
    ],
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  place: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

export default adminSchema;
