/** @format */

import express from "express";
import {
  CreatePlace,
  AllPlaces,
  DeletePlace,
  UpdatePlace,
  SingleView,
} from "../controller/PlacesController.js";

const router = express.Router();

router.post("/createplace", CreatePlace);
router.post("/singleview", SingleView);
router.get("/allplaces", AllPlaces);
router.delete("/deleteplace/:id", DeletePlace);
router.put("/updateplace/:id", UpdatePlace);

export default router;
