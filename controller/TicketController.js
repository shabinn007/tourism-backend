/** @format */

// import mongoose from "mongoose";
import Ticket from "../models/tickets.js";
import QRCode from "qrcode";

// ....................getting ticket.....................

// const Tickets = mongoose.model("ticket", TicketSchema);

// export const getTicket = async (req, res, next) => {
//   try {
//     const Ticket = await Tickets.find(req.body);
//     res.status(200).json(Ticket);
//   } catch (err) {
//     next(err);
//   }
// };

// ...........create ticket...................

const createTicket = async (req, res) => {
  const { name, no_peaple, price, place, date } = req.body;

  if (!name || !no_peaple || !place || !price || !date) {
    return res.status(422).json({ error: "add all fields" });
  }

  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    const qrCode = await QRCode.toDataURL(JSON.stringify(ticket));
    res.send({ qrCode });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export { createTicket };

// .........................get ticket................
