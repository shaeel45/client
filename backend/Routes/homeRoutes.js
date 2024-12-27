import express from "express";
const router = new express.Router();
import multer from "multer";
import fs from "fs";
import path from "path";
import Header from "../models/Header.js";
import Team from "../models/Team.js";
import Testimonial from "../models/Testimonial.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//image storage path
const imgConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/Home");
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

// Header Section
// Header Insert
router.post("/insert-header", upload.single("image"), async (req, res) => {
  const image = req.file.filename;
  const { title, description } = req.body;

  if (!title || !description || !image) {
    res.status(401).json({ status: 401, message: "All fields are required" });
  }

  try {
    const headerData = new Header({
      title,
      description,
      imgPath: image,
    });
    const finalData = await headerData.save();
    res.status(201).json({
      status: 201,
      finalData,
    });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

//Header Fetch
router.get("/get-header", async (req, res) => {
  try {
    const getUser = await Header.find();
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

// delete Header
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the header data to get the image path
    const headerData = await Header.findById({ _id: id });

    if (!headerData) {
      return res.status(404).json({ status: 404, message: "Header not found" });
    }

    // Delete the file from the folder
    const imagePath = path.join(
      __dirname,
      "../public/Home",
      headerData.imgPath
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
    const dltHeader = await Header.findByIdAndDelete({ _id: id });

    res.status(201).json({ status: 201, dltHeader });
  } catch (error) {
    console.error("Error deleting header:", error);
    res.status(500).json({ status: 500, error: "Server error" });
  }
});

// fetch header by id
router.get("/get-header/:id", async (req, res) => {
  try {
    const header = await Header.findById(req.params.id);
    res.status(200).json({ header });
  } catch (error) {
    res.status(400).json({ error: "Error fetching header data" });
  }
});

// update header
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, description } = req.body;

    // Find the existing header data
    const header = await Header.findById(req.params.id);
    if (!header) {
      return res.status(404).json({ error: "Header not found" });
    }

    // Handle new image upload
    if (req.file) {
      const oldImagePath = path.join(
        __dirname,
        "../public/Home",
        header.imgPath
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
      header.imgPath = req.file.filename;
    }

    // Update other fields
    header.title = title || header.title;
    header.description = description || header.description;

    // Save the updated data
    const updatedHeader = await header.save();

    res.status(200).json({
      message: "Header updated successfully",
      header: updatedHeader,
    });
  } catch (error) {
    console.error("Error updating header:", error);
    res.status(500).json({ error: "Server error while updating header" });
  }
});

// Team Section
// Team Insert
router.post(
  "/insert-team",
  upload.single("teamMemberImage"),
  async (req, res) => {
    const teamMemberimgPath = req.file.filename;
    const {
      teamMemberName,
      teamMemberPosition,
      teamMemberInsta,
      teamMemberFacebook,
      teamMemberLinkedin,
    } = req.body;

    if (!teamMemberName || !teamMemberPosition || !teamMemberimgPath) {
      return res
        .status(401)
        .json({
          status: 401,
          message: "Name, Position and Image fields are required",
        });
    }

    try {
      const teamData = new Team({
        teamMemberName,
        teamMemberPosition,
        teamMemberimgPath,
        teamMemberInsta,
        teamMemberFacebook,
        teamMemberLinkedin,
      });
      const finalData = await teamData.save();
      res.status(201).json({
        status: 201,
        finalData,
      });
    } catch (error) {
      res.status(401).json({ status: 401, error });
    }
  }
);

//Team Fetch
router.get("/get-team", async (req, res) => {
  try {
    const getTeamMemb = await Team.find();
    res.status(201).json({
      status: 201,
      getTeamMemb,
    });
  } catch (error) {
    res.status(401).json({
      status: 401,
      error,
    });
  }
});

// delete Team
router.delete("/get-team/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the header data to get the image path
    const teamData = await Team.findById({ _id: id });

    if (!teamData) {
      return res.status(404).json({ status: 404, message: "Team not found" });
    }

    // Delete the file from the folder
    const imagePath = path.join(
      __dirname,
      "../public/Home",
      teamData.teamMemberimgPath
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
    const dltTeam = await Team.findByIdAndDelete({ _id: id });

    res.status(201).json({ status: 201, dltTeam });
  } catch (error) {
    console.error("Error deleting Team:", error);
    res.status(500).json({ status: 500, error: "Server error" });
  }
});

// fetch team by id
router.get("/get-team/:id", async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    res.status(200).json({ team });
  } catch (error) {
    res.status(400).json({ error: "Error fetching team data" });
  }
});

// update Team
router.put(
  "/get-team/:id",
  upload.single("teamMemberImage"),
  async (req, res) => {
    try {
      const {
        teamMemberName,
        teamMemberPosition,
        teamMemberInsta,
        teamMemberFacebook,
        teamMemberLinkedin,
      } = req.body;

      // Find the existing header data
      const team = await Team.findById(req.params.id);
      if (!team) {
        return res.status(404).json({ error: "Team not found" });
      }

      // Handle new image upload
      if (req.file) {
        const oldImagePath = path.join(
          __dirname,
          "../public/Home",
          team.teamMemberimgPath
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
        team.teamMemberimgPath = req.file.filename;
      }

      // Update other fields
      team.teamMemberName = teamMemberName || team.teamMemberName;
      team.teamMemberPosition = teamMemberPosition || team.teamMemberPosition;
      team.teamMemberInsta = teamMemberInsta || team.teamMemberInsta;
      team.teamMemberFacebook = teamMemberFacebook || team.teamMemberFacebook;
      team.teamMemberLinkedin = teamMemberLinkedin || team.teamMemberLinkedin;

      // Save the updated data
      const updatedTeam = await team.save();

      res.status(200).json({
        message: "Team updated successfully",
        team: updatedTeam,
      });
    } catch (error) {
      console.error("Error updating header:", error);
      res.status(500).json({ error: "Server error while updating header" });
    }
  }
);

// Testimonial Section
// Testimonial Insert
router.post(
  "/insert-testimonial",
  upload.single("image"),
  async (req, res) => {
    const clientImgPath = req.file.filename;
    const {
      clientName,
      clientPosition,
      clientComment,
    } = req.body;

    if (!clientName || !clientPosition|| !clientComment || !clientImgPath ) {
      return res
        .status(401)
        .json({
          status: 401,
          message: "All fields are required",
        });
    }

    try {
      const testimonialData = new Testimonial({
        clientName,
        clientPosition,
        clientComment,
        clientImgPath,
      });
      const finalData = await testimonialData.save();
      res.status(201).json({
        status: 201,
        finalData,
      });
    } catch (error) {
      res.status(401).json({ status: 401, error });
    }
  }
);

//Testimonial Fetch
router.get("/get-testimonial", async (req, res) => {
  try {
    const getTestimonial = await Testimonial.find();
    res.status(201).json({
      status: 201,
      getTestimonial,
    });
  } catch (error) {
    res.status(401).json({
      status: 401,
      error,
    });
  }
});

// delete Testimonial
router.delete("/get-testimonial/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the header data to get the image path
    const testimonialData = await Testimonial.findById({ _id: id });

    if (!testimonialData) {
      return res.status(404).json({ status: 404, message: "Testimonial not found" });
    }

    // Delete the file from the folder
    const imagePath = path.join(
      __dirname,
      "../public/Home",
      testimonialData.clientImgPath
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
    const dltTestimonial = await Testimonial.findByIdAndDelete({ _id: id });

    res.status(201).json({ status: 201, dltTestimonial });
  } catch (error) {
    console.error("Error deleting Team:", error);
    res.status(500).json({ status: 500, error: "Server error" });
  }
});

// fetch testimonial by id for Details Page
router.get("/get-testimonial/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    res.status(200).json({ testimonial });
  } catch (error) {
    res.status(400).json({ error: "Error fetching testimonial data" });
  }
});

// update Testimonial
router.put(
  "/get-testimonial/:id",
  upload.single("clientImage"),
  async (req, res) => {
    try {
      const {
        clientName,
        clientPosition,
        clientComment,
      } = req.body;

      // Find the existing header data
      const testimonial = await Testimonial.findById(req.params.id);
      if (!testimonial) {
        return res.status(404).json({ error: "Testimonial not found" });
      }

      // Handle new image upload
      if (req.file) {
        const oldImagePath = path.join(
          __dirname,
          "../public/Home",
          testimonial.clientImgPath
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
        testimonial.clientImgPath = req.file.filename;
      }

      // Update other fields
      testimonial.clientName = clientName || testimonial.clientName;
      testimonial.clientPosition = clientPosition || testimonial.clientPosition;
      testimonial.clientComment = clientComment || testimonial.clientComment;

      // Save the updated data
      const updatedTestimonial = await testimonial.save();

      res.status(200).json({
        message: "Testimonial updated successfully",
        testimonial: updatedTestimonial,
      });
    } catch (error) {
      console.error("Error updating Testimonial:", error);
      res.status(500).json({ error: "Server error while updating Testimonial" });
    }
  }
);

export default router;
