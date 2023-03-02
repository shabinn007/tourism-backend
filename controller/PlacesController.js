/** @format */

import mongoose from "mongoose";

import Placesmodel from "../models/places.js";

// ...................cretae places.............................

export const CreatePlace = async (req, res) => {
  const { title, description, time, photo } = req.body;

  if (!title || !description || !time || !photo) {
    return res.status(422).json({ error: "add all fields" });
  }
  try {
    const Place = new Placesmodel({
      title: title,
      description: description,
      time: time,
      photo: photo,
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

// ............view places ............................

export const AllPlaces = async (req, res) => {
  Placesmodel.find()
    .then(places => {
      res.json({ places: places });
    })
    .catch(err => {
      console.log(err);
    });
};
