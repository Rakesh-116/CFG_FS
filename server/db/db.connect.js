import mongoose from "mongoose";
import config from "../config/config";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(config.MONGO_URI);
    console.log(`MongoDB connected successfully: ${con.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
