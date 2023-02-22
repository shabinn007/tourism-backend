/** @format */

import express from "express";
import { Usersignup, userLogin, signUpAdmin } from "../controller/AuthController.js";

const router = express.Router();

router.post("/signup", Usersignup);
router.post("/signin", userLogin);




router.post(
    ${path}/signupadmin,
    adminMiddleware,
    signUpAdmin
  );

export default router;

// import jwt from "jsonwebtoken"
