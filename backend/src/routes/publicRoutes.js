import express from "express";
import { getPublicData } from "../controllers/publicController.js";

const router = express.Router();

router.get("/publicdata", getPublicData);

export default router;