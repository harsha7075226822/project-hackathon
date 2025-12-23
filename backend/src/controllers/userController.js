import { z } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../models/userModels.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const UserRules = z.object({
    username: z.string().min(4).max(20),
    email: z.email(),
    password: z.string().min(6).max(15)
  });

  const parsedData = UserRules.safeParse({ username, email, password });
  if (!parsedData.success) {
    const errors = parsedData.error.errors.map(err => `${err.path[0]}: ${err.message}`).join(', ');
    return res.status(400).json({ message: `Validation failed: ${errors}` });
  }

  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ message: "Email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await userModel.create({
    username,
    email,
    password: hashedPassword
  });

  res.status(201).json({ message: "User created", result: newUser });
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  const isUserPresent = await userModel.findOne({ email });
  if (!isUserPresent) return res.status(400).json({ message: "Invalid email" });

  const verification = await bcrypt.compare(password, isUserPresent.password);
  if (!verification) return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ id: isUserPresent._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
  res.status(200).json({ message: "Signin successful", jwt_token: token });
};

export const getUserAccount = async (req, res) => {
  try {
    const user = await userModel.findOne({ userId: req.user.userId }).select("-password").lean();
    res.status(200).json({ userDetails: user });
  } catch (error) {
    console.error("Error fetching user account:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};