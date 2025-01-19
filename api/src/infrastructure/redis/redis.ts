import { createClient } from "redis";
import logger from "@shared/logger";

const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT) || 6379,
  },
});

redisClient.on("error", (err) => logger.error(`Redis Error: ${err}`));

const connectRedis = async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
    logger.info("Connected to Redis");
  } else {
    logger.warn("Redis connection attempt ignored (already connected)");
  }
};

const closeRedis = async () => {
  if (redisClient.isOpen) {
    await redisClient.quit();
    logger.info("Redis connection closed.");
  }
};

export { redisClient, connectRedis, closeRedis };
