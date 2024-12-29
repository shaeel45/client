import express from "express";
const router = new express.Router();
import multer from "multer";
import fs from "fs";
import path from "path";
import About from "../models/About.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//image storage path
const imgConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/About");
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

//About Insert
router.post("/insert-about", upload.single("image"), async (req, res) => {
  const image = req.file.filename;
  const { heading, firstPara, secondPara, thirdPara } = req.body;

  if (!heading || !firstPara || !secondPara || !thirdPara || !image) {
    return res.status(401).json({ status: 401, message: "All fields are required" });
  }

  try {
    const aboutData = new About({
        heading, 
        firstPara, 
        secondPara, 
        thirdPara,
        image,
    });
    const finalData = await aboutData.save();
    res.status(201).json({
      status: 201,
      finalData,
    });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

//About Fetch
router.get("/get-about", async (req, res) => {
  try {
    const getAbout = await About.find();
    res.status(201).json({
      status: 201,
      getAbout,
    });
  } catch (error) {
    res.status(401).json({
      status: 401,
      error,
    });
  }
});

//About delete
router.delete("/get-about/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the header data to get the image path
    const aboutData = await About.findById({ _id: id });

    if (!aboutData) {
      return res
        .status(404)
        .json({ status: 404, message: "About not found" });
    }

    // Delete the file from the folder
    const imagePath = path.join(
      __dirname,
      "../public/About",
      aboutData.image
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
    const dltAbout = await About.findByIdAndDelete({ _id: id });

    res.status(201).json({ status: 201, dltAbout });
  } catch (error) {
    console.error("Error deleting About:", error);
    res.status(500).json({ status: 500, error: "Server error" });
  }
});

// fetch about by id for Details Page
router.get("/get-about/:id", async (req, res) => {
  try {
    const about = await About.findById(req.params.id);
    res.status(200).json({ about });
  } catch (error) {
    res.status(400).json({ error: "Error fetching about data" });
  }
});

// update about
router.put(
  "/get-about/:id",
  upload.single("image"),
  async (req, res) => {
    try {
      const { heading, firstPara, secondPara, thirdPara } = req.body;

      // Find the existing header data
      const aboutById = await About.findById(req.params.id);
      if (!aboutById) {
        return res.status(404).json({ error: "about not found" });
      }

      // Handle new image upload
      if (req.file) {
        const oldImagePath = path.join(
          __dirname,
          "../public/About",
          aboutById.image
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
        aboutById.image = req.file.filename;
      }

      // Update other fields
      aboutById.heading = heading || aboutById.heading;
      aboutById.firstPara = firstPara || aboutById.firstPara
      aboutById.secondPara = secondPara || aboutById.secondPara
      aboutById.thirdPara = thirdPara || aboutById.thirdPara

      // Save the updated data
      const updatedAbout = await aboutById.save();

      res.status(200).json({
        message: "About updated successfully",
        aboutById: updatedAbout,
      });
    } catch (error) {
      console.error("Error updating About:", error);
      res.status(500).json({ error: "Server error while updating About" });
    }
  }
);


export default router;
