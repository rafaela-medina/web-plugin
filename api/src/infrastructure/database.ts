import mongoose from "mongoose";
import logger from "@shared/logger";

const connectDB = async () => {
  try {
    const dbUri = process.env.MONGO_URI;
    if (!dbUri) {
      throw new Error("MONGO_URI is not defined in the environment variables");
    }
    await mongoose.connect(dbUri, {
      dbName: process.env.MONGO_DB_NAME,
    });

    logger.info(`Connected to MongoDB`);
  } catch (error) {
    logger.error(`MongoDB Connection Error: ${error}`);
    process.exit(1);
  }
};

const closeDB = async () => {
  await mongoose.connection.close();
  logger.info("MongoDB connection closed.");
};

export { connectDB, closeDB };
