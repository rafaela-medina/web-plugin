import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Web Plugin API",
      version: "1.0.0",
      description: "API para coleta de dados via plugin",
    },
    servers: [
      {
        url: process.env.SWAGGER_SERVER_URL,
        description: "Servidor de desenvolvimento",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./src/adapters/routes/*.{ts,js}"],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi };