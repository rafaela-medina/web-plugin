import { createClient } from "redis";
import logger from "@shared/logger";

const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
  },
});

redisClient.on("error", (err) => logger.error(`Redis Error: ${err.message}`));
redisClient.connect().then(() => logger.info("Connected to Redis"));

export const closeRedis = async () => {
  await redisClient.quit();
  logger.info("Redis connection closed.");
};

export default redisClient;
