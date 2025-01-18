import { createClient } from "redis";
import dotenv from "dotenv";
import logger from "../../shared/logger";

dotenv.config();

const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: Number(process.env.REDIS_PORT) || 6379,
  },
});

redisClient.on("error", (err) => logger.error(`Redis Error: ${err}`));

redisClient.connect().then(() => logger.info("✅ Connected to Redis"));

export default redisClient;
