/** @format */

import mongoose from "mongoose";
// import Places from "../models/places.js";

import Placesmodel from "../models/places.js";

// ...................cretae places.............................

export const CreatePlace = async (req, res) => {
  const { title, description, location, ticket_price } = req.body;

  if (!title || !description || !location || !ticket_price) {
    return res.status(422).json({ error: "add all fields" });
  }
  try {
    const Place = new Placesmodel({
      title: title,
      description: description,
      // time: time,
      location: location,
      ticket_price: ticket_price,
      // photo: photo,
      postedBy: req.user,
    });
    await Place.save();
    res.json({ message: "saved successfully" });
    console.log(Place);
  } catch (err) {
    console.log(err);
    res.json({ message: "Something went wrong in place" });
  }
};
// .....................Single view..........................

export const SingleView = async (req, res) => {
  const { id } = req.params;

  try {
    const place = await Placesmodel.findById(id).populate(
      "postedBy",
      "_id name"
    );
    if (!place) {
      return res.status(404).json({ error: "Place not found" });
    }
    res.json(place);
  } catch (err) {
    console.log(err);
    res.json({ message: "Something went wrong while fetching place" });
  }
};

// ............view places ............................

export const AllPlaces = async (req, res) => {
  const query = req.query.q;
  if (query) {
    try {
      const results = await Placesmodel.find({
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
  }

  Placesmodel.find()
    .then(places => {
      res.json({ places: places });
    })
    .catch(err => {
      console.log(err);
    });
};
// .................update places.......................

export const UpdatePlace = async (req, res) => {
  const { id } = req.params;
  const { title, description, location, ticket_price } = req.body;

  if (!title || !description || !location || !ticket_price) {
    return res.status(422).json({ error: "add all fields" });
  }

  try {
    const updatedPlace = await Placesmodel.findByIdAndUpdate(
      id,
      {
        title,
        description,
        location,
        ticket_price,
      },
      { new: true }
    );
    if (!updatedPlace) {
      return res.status(404).json({ error: "Place not found" });
    }
    res.json({ message: "Place updated successfully", updatedPlace });
  } catch (err) {
    console.log(err);
    res.json({ message: "Something went wrong while updating place" });
  }
};

// ,,,,,,,,,,,delete places  .............

export const DeletePlace = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPlace = await Placesmodel.findByIdAndDelete(id);
    if (!deletedPlace) {
      return res.status(404).json({ error: "Place not found" });
    }
    res.json({ message: "Place deleted successfully" });
  } catch (err) {
    console.log(err);
    res.json({ message: "Something went wrong while deleting place" });
  }
};
