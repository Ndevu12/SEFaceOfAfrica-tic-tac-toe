import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwtSecretKey = process.env.JWT_SECRETKEY;

if (!jwtSecretKey) {
  throw new Error("JWT_SECRETKEY is not defined in the environment variables.");
}

export const sign = (payload) =>
  jwt.sign(payload, jwtSecretKey, { expiresIn: "24h" });

export const verify = (token) =>
  jwt.verify(token, jwtSecretKey);