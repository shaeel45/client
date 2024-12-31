import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './Routes/authRoutes.js';
import homeRoutes from './Routes/homeRoutes.js';
import serviceRoutes from "./Routes/serviceRoutes.js";
import portfolioRoutes from "./Routes/portfolioRoutes.js";
import aboutRoutes from "./Routes/aboutRoutes.js";
import textRoutes from "./Routes/textRoutes.js";
import blogRoutes from "./Routes/blogRoutes.js";
import missionRoutes from "./Routes/missionRoutes.js";
import visionRoutes from "./Routes/visionRoutes.js";
import corevalueRoutes from "./Routes/corevalueRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import contactRoutes from "./Routes/contactRoutes.js";
import messageRoutes from "./Routes/messageRoutes.js";
import privacyRoutes from "./Routes/privacyRoutes.js";

import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json()); // To parse incoming JSON requests
app.use(cors());         // Enable Cross-Origin Resource Sharing

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/home', homeRoutes);  
app.use('/api/service', serviceRoutes);
app.use('/api/portfolio', portfolioRoutes);  
app.use('/api/about', aboutRoutes);  
app.use('/api/text', textRoutes);  
app.use('/api/blog', blogRoutes);  
app.use('/api/mission', missionRoutes);
app.use('/api/vision', visionRoutes);  
app.use('/api/corevalue', corevalueRoutes);
app.use('/api/user', userRoutes);contactRoutes
app.use('/api/contact', contactRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/privacy', privacyRoutes);

app.use('/Home', express.static("./public/Home"));
app.use('/Service', express.static("./public/Service"));
app.use('/Portfolio', express.static("./public/Portfolio"));
app.use('/About', express.static("./public/About"));
app.use('/Blog', express.static("./public/Blog"));
app.use('/Mission', express.static("./public/Mission"));
app.use('/Vision', express.static("./public/Vision"));
app.use('/Corevalue', express.static("./public/Corevalue"));
app.use('/Contact', express.static("./public/Contact"));

// Define the port (use the PORT from .env or default to 5000)
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));