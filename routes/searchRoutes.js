/** @format */

import express from "express";
import searchController from "../controller/searchController.js";

const router = express.Router();

router.get("/search", searchController.search);

export default router;
