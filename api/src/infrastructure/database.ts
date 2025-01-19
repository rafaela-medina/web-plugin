import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "@shared/logger";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    logger.info("Connected to MongoDB Atlas");
  } catch (error) {
    logger.error(`MongoDB Connection Error: ${error}`);
    process.exit(1);
  }
};

export const closeDB = async () => {
  await mongoose.connection.close();
  logger.info("MongoDB connection closed.");
};

export default connectDB;
