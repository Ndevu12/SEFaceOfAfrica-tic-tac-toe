import { app } from "../app.js";
import swaggerDocs from "../config/API_config.js";
import swaggerUi from "swagger-ui-express";

export const Documentation = () => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};