import express from "express";
import { createProject, getUserProjects, getAdminProjects, getProjectById, updateProject, deleteProject } from "../controllers/projectController.js";
import { verifyAdmin } from "../middlewares/authorizeAdmin.js";
import { verifyUserToken } from "../middlewares/userAuth.js";

const router = express.Router();

router.post("/createproject", verifyAdmin, createProject);
router.get("/user/projects", verifyUserToken, getUserProjects);
router.get("/projects", verifyAdmin, getAdminProjects);
router.get("/projects/:id", verifyUserToken, getProjectById);
router.put("/projects/:id", verifyAdmin, updateProject);
router.delete("/projects/:id", verifyAdmin, deleteProject);

export default router;