import express from "express";
const router = new express.Router();
import Message from "../models/Message.js";

//Message Fetch
router.get("/get-message", async (req, res) => {
  try {
    const getMessage = await Message.find();
    res.status(201).json({
      status: 201,
      getMessage,
    });
  } catch (error) {
    res.status(401).json({
      status: 401,
      error,
    });
  }
});

//Message delete
router.delete("/get-message/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the header data to get the image path
    const messageData = await Message.findById({ _id: id });

    if (!messageData) {
      return res
        .status(404)
        .json({ status: 404, message: "message not found" });
    }
    // Delete the header data from the database
    const dltMessage = await Message.findByIdAndDelete({ _id: id });

    res.status(201).json({ status: 201, dltMessage });
  } catch (error) {
    console.error("Error deleting Message:", error);
    res.status(500).json({ status: 500, error: "Server error" });
  }
});

// fetch Message by id for Details Page
router.get("/get-message/:id", async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    res.status(200).json({ message });
  } catch (error) {
    res.status(400).json({ error: "Error fetching Message data" });
  }
});


export default router;
