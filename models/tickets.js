/** @format */

import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  place: {
    type: mongoose.Schema.Types.String  ,
    required: true,
  },
  no_peaple: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  price: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  date: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

const Ticket = mongoose.model("Ticket", TicketSchema);
export default Ticket;
