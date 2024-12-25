import express from 'express';
import User from '../models/Users.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ name, email, password, role });
    await user.save();

    const token = generateToken(user._id);
    res.status(201).json({ user, token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);
    res.status(200).json({ user, token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Forgot Password (mocked example)
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Send email logic goes here
  res.json({ message: "Reset link sent to email" });
});

// Token generator
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
}

export default router;