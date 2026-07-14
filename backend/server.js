import express from "express";
import cors from "cors";
import dotenv from  "dotenv";

dotenv.config();

const app = express(c);

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.json({message: "Backend Trade Tech Jalan"});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
