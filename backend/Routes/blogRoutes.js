import express from "express";
const router = new express.Router();
import multer from "multer";
import fs from "fs";
import path from "path";
import Blog from "../models/Blog.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//image storage path
const imgConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/Blog");
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

//Blog Insert
router.post("/insert-blog", upload.single("image"), async (req, res) => {
  const image = req.file.filename;
  const { title, desc, postedBy, likes, views, date } = req.body;

  if (!title || !desc || !postedBy || !likes || !views || !date || !image) {
    return res
      .status(401)
      .json({ status: 401, message: "All fields are required" });
  }

  try {
    const blogData = new Blog({
      title,
      desc,
      postedBy,
      likes,
      views,
      date,
      image,
    });
    const finalData = await blogData.save();
    return res.status(201).json({
      status: 201,
      finalData,
    });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

//Blog Fetch
router.get("/get-blog", async (req, res) => {
  try {
    const getBlog = await Blog.find();
    res.status(201).json({
      status: 201,
      getBlog,
    });
  } catch (error) {
    res.status(401).json({
      status: 401,
      error,
    });
  }
});

//Blog delete
router.delete("/get-blog/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the header data to get the image path
    const blogData = await Blog.findById({ _id: id });

    if (!blogData) {
      return res.status(404).json({ status: 404, message: "Blog not found" });
    }

    // Delete the file from the folder
    const imagePath = path.join(__dirname, "../public/Blog", blogData.image); // Adjust path to your image folder

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
    const dltBlog = await Blog.findByIdAndDelete({ _id: id });

    res.status(201).json({ status: 201, dltBlog });
  } catch (error) {
    console.error("Error deleting Blog:", error);
    res.status(500).json({ status: 500, error: "Server error" });
  }
});

// fetch Blog by id for Details Page
router.get("/get-blog/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json({ blog });
  } catch (error) {
    res.status(400).json({ error: "Error fetching blog data" });
  }
});

// update Service
router.put("/get-blog/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, desc, postedBy, likes, views, date } = req.body;

    // Find the existing header data
    const blogById = await Blog.findById(req.params.id);
    if (!blogById) {
      return res.status(404).json({ error: "Blog not found" });
    }

    // Handle new image upload
    if (req.file) {
      const oldImagePath = path.join(
        __dirname,
        "../public/Blog",
        blogById.image
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
      blogById.image = req.file.filename;
    }

    // Update other fields
    blogById.title = title || blogById.title;
    blogById.desc = desc || blogById.desc;
    blogById.postedBy = postedBy || blogById.postedBy;
    blogById.likes = likes || blogById.likes;
    blogById.views = views || blogById.views;
    blogById.date = date || blogById.date;

    // Save the updated data
    const updatedBlog = await blogById.save();

    res.status(200).json({
      message: "Blog updated successfully",
      blogById: updatedBlog,
    });
  } catch (error) {
    console.error("Error updating Blog:", error);
    res.status(500).json({ error: "Server error while updating Blog" });
  }
});

export default router;
