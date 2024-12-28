import express from "express";
const router = new express.Router();
import multer from "multer";
import fs from "fs";
import path from "path";
import Service from "../models/Service.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//image storage path
const imgConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/Service");
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

//Service Insert
router.post("/insert-service", upload.single("image"), async (req, res) => {
  const image = req.file.filename;
  const { service, description } = req.body;

  if (!service || !description || !image) {
    res.status(401).json({ status: 401, message: "All fields are required" });
  }

  try {
    const serviceData = new Service({
      service,
      description,
      icon: image,
    });
    const finalData = await serviceData.save();
    res.status(201).json({
      status: 201,
      finalData,
    });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

//Services Fetch
router.get("/get-service", async (req, res) => {
  try {
    const getService = await Service.find();
    res.status(201).json({
      status: 201,
      getService,
    });
  } catch (error) {
    res.status(401).json({
      status: 401,
      error,
    });
  }
});

//service delete
router.delete("/service/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the header data to get the image path
    const serviceData = await Service.findById({ _id: id });

    if (!serviceData) {
      return res
        .status(404)
        .json({ status: 404, message: "Service not found" });
    }

    // Delete the file from the folder
    const imagePath = path.join(
      __dirname,
      "../public/Service",
      serviceData.icon
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
    const dltService = await Service.findByIdAndDelete({ _id: id });

    res.status(201).json({ status: 201, dltService });
  } catch (error) {
    console.error("Error deleting Service:", error);
    res.status(500).json({ status: 500, error: "Server error" });
  }
});

// fetch testimonial by id for Details Page
router.get("/get-service/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    res.status(200).json({ service });
  } catch (error) {
    res.status(400).json({ error: "Error fetching service data" });
  }
});

// update Service
router.put(
  "/get-service/:id",
  upload.single("icon"),
  async (req, res) => {
    try {
      const {
        service,
        description,
      } = req.body;

      // Find the existing header data
      const serviceById = await Service.findById(req.params.id);
      if (!serviceById) {
        return res.status(404).json({ error: "Service not found" });
      }

      // Handle new image upload
      if (req.file) {
        const oldImagePath = path.join(
          __dirname,
          "../public/Service",
          serviceById.icon
        );

        // Delete the old image if it exists
        if (fs.existsSync(oldImagePath)) {
          try {
            fs.unlinkSync(oldImagePath);
          } catch (error) {
            console.error("Error deleting old icon:", error);
          }
        }

        // Update the new image path
        serviceById.icon = req.file.filename;
      }

      // Update other fields
      serviceById.service = service || serviceById.service;
      serviceById.description = description || serviceById.description

      // Save the updated data
      const updatedService = await serviceById.save();

      res.status(200).json({
        message: "Service updated successfully",
        serviceById: updatedService,
      });
    } catch (error) {
      console.error("Error updating Service:", error);
      res.status(500).json({ error: "Server error while updating Service" });
    }
  }
);


export default router;
