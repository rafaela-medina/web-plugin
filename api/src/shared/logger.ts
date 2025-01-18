import winston from "winston";
import dotenv from "dotenv";

dotenv.config();

const logFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
});

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    logFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/app.log", level: "info" }),
    new winston.transports.File({ filename: "logs/error.log", level: "error" })
  ],
});

export default logger;