/** @format */

import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  ticket_no: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  place: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  price: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  date: {
    type: mongoose.Schema.Types.Date,
    required: true,
  },
});

export default TicketSchema;
