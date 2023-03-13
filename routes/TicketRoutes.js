/** @format */

import express from "express";
import { createTicket } from "../controller/TicketController.js";

const router = express.Router();

// router.get("/ticketget", getTicket);
router.post("/ticketpost", createTicket);

export default router;
