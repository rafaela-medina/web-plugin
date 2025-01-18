import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import router from "../adapters/routes";
import { swaggerSpec, swaggerUi } from "./swagger";

dotenv.config();

const app = express();

// Configurar Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middlewares globais
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(rateLimit({ windowMs: 10 * 60 * 1000, max: 100 })); // 100 reqs por 10 min

// Rotas
app.use("/api/v1", router);

export default app;