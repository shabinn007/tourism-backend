/** @format */

import mongoose from "mongoose";
import userSchema from "./user.js";
// import user from "./user.js";
// import { ObjectId } from "mongoose.Schema.Types";
// const {ObjectId} =mongoose.Schema.Types
const placeSchema = new mongoose.Schema({
  title: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  description: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  photo: [
    {
      type: mongoose.Schema.Types.String,
      required: true,
    },
  ],
  time: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});
// const place = mongoose.model("Place", placeSchema);
const Places = mongoose.model("Place", placeSchema);

export default Places;
