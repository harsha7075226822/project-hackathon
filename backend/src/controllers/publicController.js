import { TechEventsModel } from "../models/TechEvents.js";
import { AppliedEventModel } from "../models/applyEvent.js";

export const getPublicData = async (req, res) => {
  try {
    const activeEvents = await TechEventsModel.find();
    const registered = await AppliedEventModel.find();
    res.status(200).json({
      message: "Active Events and Registered Students",
      event: activeEvents,
      register: registered
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message
    });
  }
};