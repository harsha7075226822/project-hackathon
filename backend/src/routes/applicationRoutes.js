import express from "express";
import { applyForEvent, getUserAppliedEvents, getAllAppliedEvents, getUserApplications } from "../controllers/applicationController.js";
import { verifyUserToken } from "../middlewares/userAuth.js";

const router = express.Router();

router.post("/event/apply/:eventId", verifyUserToken, applyForEvent);
router.get("/user/appliedevents", verifyUserToken, getUserAppliedEvents);
router.get("/allappliedevents", verifyUserToken, getAllAppliedEvents);
router.get("/user/applications", getUserApplications);

export default router;