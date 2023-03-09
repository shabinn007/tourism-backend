/** @format */

import express from "express";
import { CreatePlace, AllPlaces } from "../controller/PlacesController.js";

// import placeSchema from "../models/places.js";

const router = express.Router();

router.post("/createplace", CreatePlace);

router.get("/allplaces", AllPlaces);
// router.get("/allplaces", searchController.search);

export default router;

// router.get("/allplaces", (req, res) => {
//   Places.find()
//     .then(places => {
//       res.json({ places: places });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });
