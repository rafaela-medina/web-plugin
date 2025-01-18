import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
// import routes from "../interface/routes";

dotenv.config();

const app = express();

// Middlewares globais
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(rateLimit({ windowMs: 10 * 60 * 1000, max: 100 })); // 100 reqs por 10 min

// Rotas
// app.use("/api/v1", routes);

export default app;
