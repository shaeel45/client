import express from "express";
const router = new express.Router();
import multer from "multer";
import fs from "fs";
import path from "path";
import Portfolio from "../models/Portfolio.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//image storage path
const imgConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/Portfolio");
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

//Portfolio Insert
router.post("/insert-portfolio", upload.single("image"), async (req, res) => {
  console.log(req.body);
  console.log(req.file.filename);
  const image = req.file.filename;
  const { name, niche, link, heading, paragraph } = req.body;

  if (!name || !niche || !link || !image) {
    return res
    .status(401)
    .json({ status: 401, message: "Portfolio, Niche, Link and Image fields are required" });
  }

  try {
    const portfolioData = new Portfolio({
      name,
      niche,
      link,
      heading,
      paragraph,
      image,
    });
    const finalData = await portfolioData.save();
    console.log(finalData);
    res.status(201).json({
      status: 201,
      finalData,
    });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

//Portfolio Fetch
router.get("/get-portfolio", async (req, res) => {
  try {
    const getPortfolio = await Portfolio.find();
    res.status(201).json({
      status: 201,
      getPortfolio,
    });
  } catch (error) {
    res.status(401).json({
      status: 401,
      error,
    });
  }
});

// delete Portfolio
router.delete("/get-portfolio/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the header data to get the image path
    const portfolioData = await Portfolio.findById({ _id: id });

    if (!portfolioData) {
      return res.status(404).json({ status: 404, message: "Portfolio not found" });
    }

    // Delete the file from the folder
    const imagePath = path.join(
      __dirname,
      "../public/Portfolio",
      portfolioData.image
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
    const dltPortfolio = await Portfolio.findByIdAndDelete({ _id: id });

    res.status(201).json({ status: 201, dltPortfolio });
  } catch (error) {
    console.error("Error deleting Portfolio:", error);
    res.status(500).json({ status: 500, error: "Server error" });
  }
});

// fetch Portfolio by id for details
router.get("/get-portfolio/:id", async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    res.status(200).json({ portfolio });
  } catch (error) {
    res.status(400).json({ error: "Error fetching portfolio data" });
  }
});

// update Team
router.put(
  "/get-portfolio/:id",
  upload.single("image"),
  async (req, res) => {
    try {
      const {
        name,
        niche,
        link,
        heading,
        paragraph,
      } = req.body;

      // Find the existing header data
      const portfolio = await Portfolio.findById(req.params.id);
      if (!portfolio) {
        return res.status(404).json({ error: "Portfolio not found" });
      }

      // Handle new image upload
      if (req.file) {
        const oldImagePath = path.join(
          __dirname,
          "../public/Portfolio",
          portfolio.image
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
        portfolio.image = req.file.filename;
      }

      // Update other fields
      portfolio.name = name || portfolio.name;
      portfolio.niche = niche || portfolio.niche;
      portfolio.link = link || portfolio.link;
      portfolio.heading = heading || portfolio.heading;
      portfolio.paragraph = paragraph || portfolio.paragraph;

      // Save the updated data
      const updatedPortfolio = await portfolio.save();

      res.status(200).json({
        message: "Portfolio updated successfully",
        portfolio: updatedPortfolio,
      });
    } catch (error) {
      console.error("Error updating portfolio:", error);
      res.status(500).json({ error: "Server error while updating portfolio" });
    }
  }
);

export default router;