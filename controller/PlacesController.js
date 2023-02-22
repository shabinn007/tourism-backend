import mongoose from "mongoose";


import postSchema from "../models/places.js";
const Places = mongoose.model("place",postSchema)


   export const CreatePlace = async (req, res) => {
    const {title,description,time,photo}= req.body

    if (!title || !description || !time || !photo) {
        return res.status(422).json({error: "add all fields"})
    }
try {
    const Place = new Places({
        title: title,
        description:description,
        time:time,
        photo:photo,
        postedBy:req.user
      });
      await Place.save()
      res.json({ message: "saved successfully" });
      console.log(Place)
} 

catch (err) {
    console.log(err);
    res.json({ message: "Something went wrong in post" });
}   
  }
    

   