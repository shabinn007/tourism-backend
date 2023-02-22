/** @format */

import mongoose from "mongoose";
import TicketSchema from "../models/tickets.js";

// ....................getting ticket.....................

const Tickets = mongoose.model("ticket", TicketSchema);

export const getTicket = async (req, res, next) => {
  try {
    const Ticket = await Tickets.find(req.body);
    res.status(200).json(Ticket);
  } catch (err) {
    next(err);
  }
};

// ...........create ticket...................

export const postTicket = async (req, res, next) => {
  const { name, ticket_no, price, place, date } = req.body;

  if (!name || !ticket_no || !place || !price || !date) {
    return res.status(422).json({ error: "add all fields" });
  }
  try {
    const Ticket = new Tickets({
      name: name,
      ticket_no: ticket_no,
      place: place,
      price: price,
      date: date,
    });
    await Ticket.save();
    res.json({ message: "saved successfully" });
    console.log(Ticket);
  } catch (err) {
    console.log(err);
    res.json({ message: "Something went wrong in tickets" });
  }
};
