import mongoose from "mongoose";
import userSchema from "./user.js";
// import user from "./user.js";
// import { ObjectId } from "mongoose.Schema.Types";
// const {ObjectId} =mongoose.Schema.Types
const postSchema = new mongoose.Schema({
    title:{
        type: mongoose.Schema.Types.String,
        required: true
    },
    description:{
        type: mongoose.Schema.Types.String,
        required: true
    },
    photo:{
        type: mongoose.Schema.Types.String,
        default :"non pic"
    },
    time:{
        type: mongoose.Schema.Types.Number,
        required: true
    }
    
})

export default postSchema
