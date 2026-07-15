import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../db/connection.js";
import { users } from "../db/schema.js";
import { eq } from "drizzle-orm";

export async function register(data) {

    const { username, email, password } = data;

    const existingUser = await db.query.users.findFirst({
        where: eq(users.email, email)
    });

    if (existingUser) {
        throw new Error("Email sudah digunakan");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await db.insert(users).values({
        username,
        email,
        password: hashedPassword
    });

    return result;
}

export async function login(data) {

    const { email, password } = data;

    const user = await db.query.users.findFirst({
        where: eq(users.email, email)
    });

    if (!user) {
        throw new Error("Email tidak ditemukan");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Password salah");
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d"
        }
    );

    return {
        token,
        user
    };
}