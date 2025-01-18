import { Request, Response, NextFunction } from "express";
import redisClient from "../../infrastructure/redis/redis";

const RATE_LIMIT = 5; // Máximo de 5 requisições
const RATE_LIMIT_WINDOW = 10 * 60; // 10 minutos em segundos

const RateLimitMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const domain = (req as any).user?.domain;
    if (!domain) {
      res.status(401).json({ error: "Authentication required" });
      return;
    }

    const redisKey = `rate-limit:${domain}`;
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
