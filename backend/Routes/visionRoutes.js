import express from "express";
const router = new express.Router();
import multer from "multer";
import fs from "fs";
import path from "path";
import Vision from "../models/Vision.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//image storage path
const imgConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/Vision");
  },
  filename: (req, file, callback) => {
    callback(null, `image-${file.originalname}`);
  },
});

//image filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("Only images are allowed"));
  }
};

const upload = multer({
  storage: imgConfig,
  fileFilter: isImage,
});

//Vision Insert
router.post("/insert-vision", upload.single("image"), async (req, res) => {
  const image = req.file.filename;
  const { heading, description } = req.body;

  if (!heading || !description || !image) {
    return res.status(401).json({ status: 401, message: "All fields are required" });
  }

  try {
    const missionData = new Vision({
        heading,
      description,
      image,
    });
    const finalData = await missionData.save();
    res.status(201).json({
      status: 201,
      finalData,
    });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

//Mission Fetch
router.get("/get-vision", async (req, res) => {
  try {
    const getVision = await Vision.find();
    res.status(201).json({
      status: 201,
      getVision,
    });
  } catch (error) {
    res.status(401).json({
      status: 401,
      error,
    });
  }
});

//vision delete
router.delete("/get-vision/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the header data to get the image path
    const visionData = await Vision.findById({ _id: id });

    if (!visionData) {
      return res
        .status(404)
        .json({ status: 404, message: "vision not found" });
    }

    // Delete the file from the folder
    const imagePath = path.join(
      __dirname,
      "../public/Vision",
      visionData.image
    ); // Adjust path to your image folder

    if (fs.existsSync(imagePath)) {
      try {
        fs.unlinkSync(imagePath);
      } catch (error) {
        console.error("Error deleting file:", error);
      }
    } else {
      console.log("File does not exist:", imagePath);
    }

    // Delete the header data from the database
    const dltVision = await Vision.findByIdAndDelete({ _id: id });

    res.status(201).json({ status: 201, dltVision });
  } catch (error) {
    console.error("Error deleting Vision:", error);
    res.status(500).json({ status: 500, error: "Server error" });
  }
});

// fetch vision by id for Details Page
router.get("/get-vision/:id", async (req, res) => {
  try {
    const vision = await Vision.findById(req.params.id);
    res.status(200).json({ vision });
  } catch (error) {
    res.status(400).json({ error: "Error fetching vision data" });
  }
});

// update Service
router.put(
  "/get-vision/:id",
  upload.single("image"),
  async (req, res) => {
    try {
      const {
        heading,
        description,
      } = req.body;

      // Find the existing header data
      const missionById = await Vision.findById(req.params.id);
      if (!missionById) {
        return res.status(404).json({ error: "mission not found" });
      }

      // Handle new image upload
      if (req.file) {
        const oldImagePath = path.join(
          __dirname,
          "../public/Vision",
          missionById.image
        );

        // Delete the old image if it exists
        if (fs.existsSync(oldImagePath)) {
          try {
            fs.unlinkSync(oldImagePath);
          } catch (error) {
            console.error("Error deleting old image:", error);
          }
        }

        // Update the new image path
        missionById.image = req.file.filename;
      }

      // Update other fields
      missionById.heading = heading || missionById.heading;
        missionById.description = description || missionById.description

      // Save the updated data
      const updatedMission = await missionById.save();

      res.status(200).json({
        message: "Mission updated successfully",
        missionById: updatedMission,
      });
    } catch (error) {
      console.error("Error updating Mission:", error);
      res.status(500).json({ error: "Server error while updating Mission" });
    }
  }
);


export default router;
