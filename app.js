/** @format */

import AuthRoutes from "./routes/AuthRoutes.js";
import Placerouter from "./routes/PlacesRoutes.js";
import TicketRoutes from "./routes/TicketRoutes.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import connectDB from "./config/connectDB.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(bodyParser.json());

app.use(cors({ origin: true, credentials: true }));

app.use(AuthRoutes, Placerouter, TicketRoutes);

const DATABASE_URL = process.env.DATABASE_URL;
// DB Connection
connectDB(DATABASE_URL);

//JSON

app.listen(port, () => {
  console.log("server is running on:", port);
});
