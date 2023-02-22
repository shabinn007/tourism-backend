/** @format */

import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/connectDB.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

//cors policy
// app.use(cors())
//Load rotes

app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

import AuthRoutes from "./routes/AuthRoutes.js";
app.use(AuthRoutes);

import Placerouter from "./routes/PlacesRoutes.js";
app.use(Placerouter);

import TicketRoutes from "./routes/TicketRoutes.js";
app.use(TicketRoutes);

const DATABASE_URL = process.env.DATABASE_URL;
// DB Connection
connectDB(DATABASE_URL);

//JSON

app.listen(port, () => {
  console.log("server is running on:", port);
});
