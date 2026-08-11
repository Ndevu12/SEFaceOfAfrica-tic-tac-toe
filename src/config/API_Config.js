import swaggerjsdoc from "swagger-jsdoc";
import dotenv from "dotenv";
import { SwaggerServer } from "../startups/SwaggerServer.js";

dotenv.config();

const swaggerServer = SwaggerServer();

const options = {
  definition: {
    openapi: "3.0.2",
    info: {
      title: "Tic Tac Toe Game API Documentation",
      version: "1.0.0",
      description:
        "Tic Tac Toe Game's API documentation show off how to use the API to perform various operations.",
      contact: {
        name: "Tic Tac Toe Game",
        url: process.env.LIVE_SERVER_FOR_SWAGGER || "/",
        email: process.env.ADMIN_EMAIL_FOR_SWAGGER || "sample@gmail.com",
      },
    },
    servers: [{ url: swaggerServer }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/Docs/*.js", "./src/Docs/*.yml"],
};

const swaggerDocs = swaggerjsdoc(options);

export default swaggerDocs;
