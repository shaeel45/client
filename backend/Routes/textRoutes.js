import express from "express";
const router = new express.Router();
import Text from "../models/Text.js";

//Text Insert
router.post("/insert-text", async (req, res) => {
  const { heading, desc, firstPoint, secondPoint, thirdPoint } = req.body;

  if (!heading || !desc || !firstPoint) {
    return res.status(401).json({ status: 401, message: "Heading, Description and First Point fields are required" });
  }

  try {
    const textData = new Text({ heading, desc, firstPoint, secondPoint, thirdPoint });
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
router.get("/get-text", async (req, res) => {
  try {
    const getText = await Text.find();
    res.status(201).json({
      status: 201,
      getText,
    });
  } catch (error) {
    res.status(401).json({
      status: 401,
      error,
    });
  }
});

//Text delete
router.delete("/get-text/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the header data to get the image path
    const textData = await Text.findById({ _id: id });

    if (!textData) {
      return res
        .status(404)
        .json({ status: 404, message: "Text not found" });
    }
    // Delete the header data from the database
    const dltText = await Text.findByIdAndDelete({ _id: id });

    res.status(201).json({ status: 201, dltText });
  } catch (error) {
    console.error("Error deleting Text:", error);
    res.status(500).json({ status: 500, error: "Server error" });
  }
});

// fetch Text by id for Details Page
router.get("/get-text/:id", async (req, res) => {
  try {
    const text = await Text.findById(req.params.id);
    res.status(200).json({ text });
  } catch (error) {
    res.status(400).json({ error: "Error fetching text data" });
  }
});

// update Text
router.put(
  "/get-text/:id",
  async (req, res) => {
    try {
      const { heading, desc, firstPoint, secondPoint, thirdPoint } = req.body;

      // Find the existing header data
      const textById = await Text.findById(req.params.id);
      if (!textById) {
        return res.status(404).json({ error: "Text not found" });
      }

      // Update other fields
      textById.heading = heading || textById.heading;
      textById.desc = desc || textById.desc
      textById.firstPoint = firstPoint || textById.firstPoint
      textById.secondPoint = secondPoint || textById.secondPoint
      textById.thirdPoint = thirdPoint || textById.thirdPoint

      // Save the updated data
      const updatedText = await textById.save();

      res.status(200).json({
        message: "Text updated successfully",
        textById: updatedText,
      });
    } catch (error) {
      console.error("Error updating Text:", error);
      res.status(500).json({ error: "Server error while updating Text" });
    }
  }
);


export default router;
