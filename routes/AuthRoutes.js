/** @format */

import express from "express";
import { Usersignup, userLogin } from "../controller/AuthController.js";

const router = express.Router();

router.post("/signup", Usersignup);
router.post("/signin", userLogin);

// router.post(
//     ${path}/signUpAdmin,
//     adminMiddleware,
//     signUpAdmin
//   );

export default router;

// import jwt from "jsonwebtoken"
