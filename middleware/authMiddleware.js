/** @format */

import jwt from "jsonwebtoken";
import userModel from "../models/user";
import adminModel from "../models/admin";

export async function adminMiddleware(req, res, next) {
  const token =
    (req.header("Authorization") &&
      req.header("Authorization").split("Bearer ")[1]) ||
    null;

  if (!token) {
    return res
      .status(401)
      .send({ message: "Access denied. No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const admin = await adminModel.findOne({ _id: decoded._id });

    if (!admin) {
      return res.status(400).send({ message: "Invalid admin" });
    }

    const userId = admin.userId;
    const user = await userModel.findOne({ _id: userId });

    if (!user) {
      return res.status(400).send({ message: "Invalid user" });
    }

    if (user.role != "admin") {
      return res.status(403).send({ message: "Access denied. Not an doctor" });
    }

    req.body.doctor = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Invalid token" });
  }
}
