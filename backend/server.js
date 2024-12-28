import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './Routes/authRoutes.js';
import homeRoutes from './Routes/homeRoutes.js';
import serviceRoutes from "./Routes/serviceRoutes.js";
import portfolioRoutes from "./Routes/portfolioRoutes.js";
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


app.use('/Home', express.static("./public/Home"));
app.use('/Service', express.static("./public/Service"));
app.use('/portfolio', express.static("./public/portfolio"));

// Define the port (use the PORT from .env or default to 5000)
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));