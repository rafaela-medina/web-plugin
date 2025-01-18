import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Coleta de Dados",
      version: "1.0.0",
      description: "Documentação da API para extração de dados via plugin.",
    },
    servers: [{ url: "http://localhost:3000/api/v1" }],
  },
  apis: ["./src/interface/routes/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
