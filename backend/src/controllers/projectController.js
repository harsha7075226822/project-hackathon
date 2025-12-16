import { projectModel } from "../models/ProjectSchema.js";

export const createProject = async (req, res) => {
  try {
    const newProject = new projectModel({
      ...req.body,
      createdBy: req.adminId
    });
    await newProject.save();
    res.status(201).json({
      message: "Project Created Successfully"
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message
    });
  }
};

export const getUserProjects = async (req, res) => {
  try {
    const projects = await projectModel.find();
    res.status(200).json({
      message: "Projects",
      events: projects
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message
    });
  }
};

export const getAdminProjects = async (req, res) => {
  try {
    const projects = await projectModel.find({ createdBy: req.adminId });
    res.status(200).json({
      message: "Projects",
      events: projects
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message
    });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const projectDetails = await projectModel.findById(id);
    res.status(200).json({
      message: "Each Project Details",
      events: projectDetails
    });
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const updatedProject = await projectModel.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.adminId },
      req.body,
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({
      message: "Project updated successfully",
      project: updatedProject
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const deletedEvent = await projectModel.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.adminId
    });

    if (!deletedEvent)
      return res.status(404).json({ message: "Event not found or not owned by you" });

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};