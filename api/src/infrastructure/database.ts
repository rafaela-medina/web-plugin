import mongoose from "mongoose";
import logger from "@shared/logger";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    logger.info("Connected to MongoDB Atlas");
  } catch (error) {
    logger.error(`MongoDB Connection Error: ${(error as Error).message}`);
    process.exit(1);
  }
};

export default connectDB;
