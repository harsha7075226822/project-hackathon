import express from "express";
import { saveEvent, getSavedEvents, checkSavedEvent } from "../controllers/savedController.js";
import { verifyUserToken } from "../middlewares/userAuth.js";

const router = express.Router();

router.post("/user/saved", verifyUserToken, saveEvent);
router.get("/user/savedevents", verifyUserToken, getSavedEvents);
router.get("/user/saved/:eventid", verifyUserToken, checkSavedEvent);

export default router;