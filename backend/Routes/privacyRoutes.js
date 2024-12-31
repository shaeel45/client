import express from "express";
const router = new express.Router();
import Privacy from "../models/Privacy.js";

//Text Insert
router.post("/insert-privacy", async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description ) {
    return res.status(401).json({ status: 401, message: "All fields are required" });
  }

  try {
    const textData = new Privacy({ title, description });
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
router.get("/get-privacy", async (req, res) => {
  try {
    const getPrivacy = await Privacy.find();
    res.status(201).json({
      status: 201,
      getPrivacy,
    });
  } catch (error) {
    res.status(401).json({
      status: 401,
      error,
    });
  }
});

//Text delete
router.delete("/get-privacy/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the header data to get the image path
    const textData = await Privacy.findById({ _id: id });

    if (!textData) {
      return res
        .status(404)
        .json({ status: 404, message: "Privacy not found" });
    }
    // Delete the header data from the database
    const dltText = await Privacy.findByIdAndDelete({ _id: id });

    res.status(201).json({ status: 201, dltText });
  } catch (error) {
    console.error("Error deleting Privacy:", error);
    res.status(500).json({ status: 500, error: "Server error" });
  }
});

// fetch Text by id for Details Page
router.get("/get-privacy/:id", async (req, res) => {
  try {
    const privacy = await Privacy.findById(req.params.id);
    res.status(200).json({ privacy });
  } catch (error) {
    res.status(400).json({ error: "Error fetching privacy data" });
  }
});

// update Privacy
router.put(
  "/get-privacy/:id",
  async (req, res) => {
    try {
      const { title, description } = req.body;

      // Find the existing header data
      const textById = await Privacy.findById(req.params.id);
      if (!textById) {
        return res.status(404).json({ error: "Privacy not found" });
      }

      // Update other fields
      textById.title = title || textById.title;
      textById.description = description || textById.description

      // Save the updated data
      const updatedText = await textById.save();

      res.status(200).json({
        message: "Privacy updated successfully",
        textById: updatedText,
      });
    } catch (error) {
      console.error("Error updating Privacy:", error);
      res.status(500).json({ error: "Server error while updating Privacy" });
    }
  }
);


export default router;
