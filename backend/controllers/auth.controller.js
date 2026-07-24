import * as authService from "../services/auth.service.js";

export async function register(req, res) {
    try {
        const result = await authService.register(req.body);

        res.status(201).json({
            success: true,
            message: "Register berhasil",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

export async function login(req, res) {
    try {
        const result = await authService.login(req.body);

        res.status(200).json({
            success: true,
            message: "Login berhasil",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}