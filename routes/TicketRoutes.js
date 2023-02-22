/** @format */

import express from "express";
import { getTicket, postTicket } from "../controller/TicketController.js";

const router = express.Router();

router.get("/ticketget", getTicket);
router.post("/ticketpost", postTicket);

export default router;
