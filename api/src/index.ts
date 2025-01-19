import "module-alias/register";
import app from "./shared/server";
import connectDB, { closeDB } from "./infrastructure/database";
import { connectRedis, closeRedis } from "./infrastructure/redis/redis";
import logger from "./shared/logger";

const PORT = process.env.PORT;

const startServer = async () => {
  await connectDB();
  await connectRedis();

  const server = app.listen(PORT, () => {
    logger.info(`🚀 Server running on port ${PORT}`);
  });

  const shutdown = async (signal: string) => {
    logger.info(`Received ${signal}, shutting down...`);
    await closeDB();
    await closeRedis();
    server.close(() => logger.info("Server closed."));
    process.exit(0);
  };

  process.on("SIGINT", () => shutdown("SIGINT"));
  process.on("SIGTERM", () => shutdown("SIGTERM"));
};

startServer();
