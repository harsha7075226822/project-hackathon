import express from "express";
import { getAllEvents, getEventById, getAdminEvents, createEvent, updateEvent, deleteEvent } from "../controllers/eventController.js";
import { verifyAdmin } from "../middlewares/authorizeAdmin.js";

const router = express.Router();

router.get("/events/all", getAllEvents);
router.get("/user/allevents/:eventid", getEventById);
router.get("/admin/events", verifyAdmin, getAdminEvents);
router.get("/events/my", verifyAdmin, getAdminEvents);
router.post("/events/post", verifyAdmin, createEvent);
router.put("/events/:id", verifyAdmin, updateEvent);
router.delete("/events/:id", verifyAdmin, deleteEvent);

export default router;