import "module-alias/register";

import connectDB from "@infrastructure/database";
import logger from "@shared/logger";

import app from "@shared/server";

const PORT = Number(process.env.PORT);

logger.info("Connecting to the database...");
connectDB()
  .then(() => {
    logger.info("✅ Database connected successfully");
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    logger.error("Failed to connect to the database", error);
    process.exit(1);
  });
