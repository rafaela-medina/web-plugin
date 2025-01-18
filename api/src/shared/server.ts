import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middlewares globais
app.use(express.json()); // Permite receber JSON no body
app.use(cors()); // Habilita CORS para requisições de diferentes domínios
app.use(helmet()); // Adiciona segurança nos headers HTTP
app.use(
  rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutos
    max: 100, // Limite de 100 requisições por IP
  })
);

export default app;
