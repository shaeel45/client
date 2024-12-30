import express from "express";
const router = new express.Router();
import User from "../models/Users.js";

//User Insert
router.post("/insert-user", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(401)
      .json({ status: 401, message: "All fields are required" });
  }

  try {
    const textData = new User({ name, email, password });
    const finalData = await textData.save();
    res.status(201).json({
      status: 201,
      finalData,
    });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

//Text Fetch
router.get("/get-user", async (req, res) => {
  try {
    const getUser = await User.find();
    res.status(201).json({
      status: 201,
      getUser,
    });
  } catch (error) {
    res.status(401).json({
      status: 401,
      error,
    });
  }
});

//user delete
router.delete("/get-user/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the header data to get the image path
    const textData = await User.findById({ _id: id });

    if (!textData) {
      return res.status(404).json({ status: 404, message: "user not found" });
    }
    // Delete the header data from the database
    const dltText = await User.findByIdAndDelete({ _id: id });

    res.status(201).json({ status: 201, dltText });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ status: 500, error: "Server error" });
  }
});

// fetch user by id for Details Page
router.get("/get-user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: "Error fetching text data" });
  }
});

// update user
router.put("/get-user/:id", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Find the existing header data
    const textById = await User.findById(req.params.id);
    if (!textById) {
      return res.status(404).json({ error: "user not found" });
    }

    // Update other fields
    textById.name = name || textById.name;
    textById.email = email || textById.email;
    textById.password = password || textById.password;

    // Save the updated data
    const updatedText = await textById.save();

    res.status(200).json({
      message: "User updated successfully",
      textById: updatedText,
    });
  } catch (error) {
    console.error("Error updating User:", error);
    res.status(500).json({ error: "Server error while updating User" });
  }
});

export default router;
