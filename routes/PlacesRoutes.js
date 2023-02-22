import express from "express"
import { CreatePlace } from "../controller/PlacesController.js";

const router = express.Router();


router.post("/createplace", CreatePlace)
  
export default router