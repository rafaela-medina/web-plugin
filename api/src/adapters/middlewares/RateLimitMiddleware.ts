import { Request, Response, NextFunction } from "express";
import redisClient from "@infrastructure/redis/redis";

const RATE_LIMIT = 5;
const RATE_LIMIT_WINDOW = 10 * 60;

const RateLimitMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
      res.status(401).json({ error: "Authentication required" });
      return;
    }

    const redisKey = `rate-limit:${token}`;
    const requests = await redisClient.get(redisKey);

    if (requests && Number(requests) >= RATE_LIMIT) {
      res.status(429).json({ error: "Rate limit exceeded. Try again later." });
      return;
    }

    await redisClient.setEx(redisKey, RATE_LIMIT_WINDOW, String(Number(requests || 0) + 1));

    next();
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export default RateLimitMiddleware;

