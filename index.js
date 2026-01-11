import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Password Reset Backend is running successfully");
});

const PORT = process.env.PORT || 7002;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
