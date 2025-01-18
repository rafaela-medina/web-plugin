import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import logger from "@shared/logger";
const AuthMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    logger.error("Token is missing or malformed");
    res.status(401).json({ error: "Token is missing or malformed" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;
    (req as any).user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ error: "Invalid token" });
  }
};

export default AuthMiddleware;