import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

// Test endpoint
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Backend Trade Tech Jalan"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});