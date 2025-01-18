import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import logger from "../../shared/logger";

const AuthMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    logger.warn("Unauthorized access attempt");
    res.status(401).json({ error: "Token is missing" });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;
    (req as any).user = decoded;
    next();
  } catch {
    logger.warn("Invalid token used in API");
    res.status(403).json({ error: "Invalid token" });
  }
};

export default AuthMiddleware;