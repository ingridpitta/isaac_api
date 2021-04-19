import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import studentRoutes from "./routes/student.routes";

const PORT = process.env.PORT || 3000;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Isaac's Students API",
      version: "1.0.0",
      description: "A simple Express API for Isaac's Coding Challenge",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["src/routes/*.js"],
};

const swaggerSpecs = swaggerJSDoc(swaggerOptions);

dotenv.config();
const app = express();

app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs, { explorer: true }));

app.use(cors());
app.use(express.json());
app.use("/api", studentRoutes);

app.use((_, res) => {
  const error = new Error("Not Found");
  res.status(404).json({ status: 404, message: error.message });
});

/* eslint-disable no-alert, no-console */
app.listen(PORT, () => console.log(`App running on PORT ${PORT}`));
