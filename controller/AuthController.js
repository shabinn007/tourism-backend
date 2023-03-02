/** @format */

import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SEC_KEY = process.env.JWT_SC_KEY;
import userSchema from "../models/user.js";
const Userr = mongoose.model("user", userSchema);

// ........................................SignUP.....................................

export const Usersignup = async (req, res) => {
  // export async function AuthController(req,res){
  const { username, email, password } = req.body;
  if (!password || !username || !email) {
    res.json({ error: "add all fields" });
  }
  // res.json({message:"success"})

  try {
    const savedUser = await Userr.findOne({ email: email });
    console.log("saveduser", savedUser);
    if (savedUser) {
      return res.json({ error: "Already exists" });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const User = new Userr({
      email: email,
      username: username,
      password: encryptedPassword,
      // phone: phone,
    });

    await User.save();
    res.json({ message: "saved successfully" });
  } catch (err) {
    console.log(err);
    res.json({ message: "Something went wrong" });
  }
};

// ......................adminSignup...................?

// export async function signUpAdmin(req, res, next) {
//   let username = req.body.user.username;

//   console.log(username);

//   let { user } = await findUser(username);
//   if (user) return res.status(400).send({ message: "user already registered" });

//   const password = req.body.user.password;

//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(password, salt);

//   try {
//     const { user } = await saveUser({
//       ...req.body.user,
//       password: hashedPassword,
//     });

//     console.log(user);
//     if (user.role === "doctor") {
//       await saveDoctor({
//         userId: user._id,
//         ...req.body.doctor,
//       });
//     }

//     res.status(200).send({ success: true });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// }

// ........................................LogIN.....................................

export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "provide email or password" });
  }
  Userr.findOne({ email: email }).then(savedUser => {
    if (!savedUser) {
      return res.status(422).json({ error: "invalid email or password" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then(doMatch => {
        if (doMatch) {
          // res.json({ message: "login success" });
          const token = jwt.sign({ Userid: savedUser._id }, JWT_SEC_KEY);
          res.json({ token: token, message: "Logged in", status: "success" });
        } else {
          return res.status(422).json({ error: "invalid email or password" });
        }
      })
      .catch(err => {
        console.log(err);
      });
  });
};
