/** @format */

import Places from "../models/places.js";

const searchController = {};

searchController.search = async (req, res) => {
  const query = req.query.q;
  try {
    const results = await Places.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

export default searchController;
