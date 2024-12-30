import express from "express";
const router = new express.Router();
import multer from "multer";
import fs from "fs";
import path from "path";
import Emailcard from "../models/Emailcard.js";
import Phonecard from "../models/Phonecard.js";
import Addresscard from "../models/Addresscard.js";


import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//image storage path
const imgConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/Contact");
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

//Email card Insert
router.post("/insert-contact", upload.single("emailImage"), async (req, res) => {

  const emailImage = req.file.filename;
  const { emailHeading, email } = req.body;

  if (!emailHeading || !email || !emailImage  ) {
    return res.status(401).json({ status: 401, message: "All fields are required" });
  }

  try {
    const missionData = new Emailcard({ emailHeading, email, emailImage });
    const finalData = await missionData.save();
    res.status(201).json({
      status: 201,
      finalData,
    });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

//Email card  Fetch
router.get("/get-contact", async (req, res) => {
  try {
    const getMission = await Emailcard.find();
    res.status(201).json({
      status: 201,
      getMission,
    });
  } catch (error) {
    res.status(401).json({
      status: 401,
      error,
    });
  }
});

//Email card  delete
router.delete("/get-contact/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the header data to get the image path
    const missionData = await Emailcard.findById({ _id: id });

    if (!missionData) {
      return res
        .status(404)
        .json({ status: 404, message: "Emailcard not found" });
    }

    // Delete the file from the folder
    const imagePath = path.join(
      __dirname,
      "../public/Contact",
      missionData.emailImage
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
    const dltMission = await Emailcard.findByIdAndDelete({ _id: id });

    res.status(201).json({ status: 201, dltMission });
  } catch (error) {
    console.error("Error deleting Mission:", error);
    res.status(500).json({ status: 500, error: "Server error" });
  }
});

// fetch Email card  by id for Details Page
router.get("/get-contact/:id", async (req, res) => {
  try {
    const mission = await Emailcard.findById(req.params.id);
    res.status(200).json({ mission });
  } catch (error) {
    res.status(400).json({ error: "Error fetching mission data" });
  }
});

// update Email card 
router.put(
  "/get-contact/:id",
  upload.single("emailImage"),
  async (req, res) => {
    try {
      const { emailHeading, email } = req.body;

      // Find the existing header data
      const missionById = await Emailcard.findById(req.params.id);
      if (!missionById) {
        return res.status(404).json({ error: "mission not found" });
      }

      // Handle new image upload
      if (req.file) {
        const oldImagePath = path.join(
          __dirname,
          "../public/Contact",
          missionById.emailImage
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
        missionById.emailImage = req.file.filename;
      }

      // Update other fields
      missionById.emailHeading = emailHeading || missionById.emailHeading;
        missionById.email = email || missionById.email

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

//Phone card Insert
router.post("/insert-phone", upload.single("phoneImage"), async (req, res) => {

  const phoneImage = req.file.filename;
  const { phoneHeading, phone } = req.body;

  if (!phoneHeading || !phone || !phoneImage  ) {
    return res.status(401).json({ status: 401, message: "All fields are required" });
  }

  try {
    const missionData = new Phonecard({ phoneHeading, phone, phoneImage });
    const finalData = await missionData.save();
    res.status(201).json({
      status: 201,
      finalData,
    });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

//Phone card  Fetch
router.get("/get-phone", async (req, res) => {
  try {
    const getMission = await Phonecard.find();
    res.status(201).json({
      status: 201,
      getMission,
    });
  } catch (error) {
    res.status(401).json({
      status: 401,
      error,
    });
  }
});

//Phone card  delete
router.delete("/get-phone/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the header data to get the image path
    const missionData = await Phonecard.findById({ _id: id });

    if (!missionData) {
      return res
        .status(404)
        .json({ status: 404, message: "Phone card not found" });
    }

    // Delete the file from the folder
    const imagePath = path.join(
      __dirname,
      "../public/Contact",
      missionData.phoneImage
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
    const dltMission = await Phonecard.findByIdAndDelete({ _id: id });

    res.status(201).json({ status: 201, dltMission });
  } catch (error) {
    console.error("Error deleting Mission:", error);
    res.status(500).json({ status: 500, error: "Server error" });
  }
});

// fetch Email card  by id for Details Page
router.get("/get-phone/:id", async (req, res) => {
  try {
    const mission = await Phonecard.findById(req.params.id);
    res.status(200).json({ mission });
  } catch (error) {
    res.status(400).json({ error: "Error fetching mission data" });
  }
});

// update Phone card 
router.put(
  "/get-phone/:id",
  upload.single("phoneImage"),
  async (req, res) => {
    try {
      const { phoneHeading, phone } = req.body;

      // Find the existing header data
      const missionById = await Phonecard.findById(req.params.id);
      if (!missionById) {
        return res.status(404).json({ error: "Phonecard not found" });
      }

      // Handle new image upload
      if (req.file) {
        const oldImagePath = path.join(
          __dirname,
          "../public/Contact",
          missionById.phoneImage
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
        missionById.phoneImage = req.file.filename;
      }

      // Update other fields
      missionById.phoneHeading = phoneHeading || missionById.phoneHeading;
        missionById.phone = phone || missionById.phone

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

//Address card Insert
router.post("/insert-address", upload.single("addressImage"), async (req, res) => {

  const addressImage = req.file.filename;
  const { addressHeading, address } = req.body;

  if (!addressHeading || !address || !addressImage  ) {
    return res.status(401).json({ status: 401, message: "All fields are required" });
  }

  try {
    const missionData = new Addresscard({ addressHeading, address, addressImage });
    const finalData = await missionData.save();
    res.status(201).json({
      status: 201,
      finalData,
    });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

//address card  Fetch
router.get("/get-address", async (req, res) => {
  try {
    const getMission = await Addresscard.find();
    res.status(201).json({
      status: 201,
      getMission,
    });
  } catch (error) {
    res.status(401).json({
      status: 401,
      error,
    });
  }
});

//address card  delete
router.delete("/get-address/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the header data to get the image path
    const missionData = await Addresscard.findById({ _id: id });

    if (!missionData) {
      return res
        .status(404)
        .json({ status: 404, message: "address card not found" });
    }

    // Delete the file from the folder
    const imagePath = path.join(
      __dirname,
      "../public/Contact",
      missionData.addressImage
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
    const dltMission = await Addresscard.findByIdAndDelete({ _id: id });

    res.status(201).json({ status: 201, dltMission });
  } catch (error) {
    console.error("Error deleting address:", error);
    res.status(500).json({ status: 500, error: "Server error" });
  }
});

// fetch address card  by id for Details Page
router.get("/get-address/:id", async (req, res) => {
  try {
    const mission = await Addresscard.findById(req.params.id);
    res.status(200).json({ mission });
  } catch (error) {
    res.status(400).json({ error: "Error fetching mission data" });
  }
});

// update address card 
router.put(
  "/get-address/:id",
  upload.single("addressImage"),
  async (req, res) => {
    try {
      const { addressHeading, address } = req.body;

      // Find the existing header data
      const missionById = await Addresscard.findById(req.params.id);
      if (!missionById) {
        return res.status(404).json({ error: "addresscard not found" });
      }

      // Handle new image upload
      if (req.file) {
        const oldImagePath = path.join(
          __dirname,
          "../public/Contact",
          missionById.addressImage
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
        missionById.addressImage = req.file.filename;
      }

      // Update other fields
      missionById.addressHeading = addressHeading || missionById.addressHeading;
        missionById.address = address || missionById.address

      // Save the updated data
      const updatedMission = await missionById.save();

      res.status(200).json({
        message: "Mission updated successfully",
        missionById: updatedMission,
      });
    } catch (error) {
      console.error("Error updating address:", error);
      res.status(500).json({ error: "Server error while updating address" });
    }
  }
);

export default router;
