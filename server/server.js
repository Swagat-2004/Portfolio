import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio backend is running.");
});

// Connect to MongoDB Atlas, then start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
  
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve React build files
app.use(express.static(path.join(__dirname, '../client/dist')));

// Catch-all route — React Router ke liye (agar use kiya hai)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});