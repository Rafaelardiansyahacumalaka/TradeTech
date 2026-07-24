import express from "express";
import * as authController from "../controllers/auth.controller.js";
import { authenticateToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

// Endpoint untuk test middleware
router.get("/profile", authenticateToken, (req, res) => {
    res.status(200).json({
        success: true,
        data: req.user
    });
});

export default router;