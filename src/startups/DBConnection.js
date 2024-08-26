import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
    const dburl = String(process.env.DB_URL) || "";

    await mongoose.connect(dburl);
    console.log(
      `${
        process.env.NODE_ENV === "test"
          ? "Testing Database connected successfully!"
          : "Database connected successfully!"
      }`
    );
  } catch (error) {
    console.error(`Error while connecting to database: ${ (error).message }`);
  }
};

export { connectDb };