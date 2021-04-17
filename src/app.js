import express from "express";
import dotenv from "dotenv";
import studentRoutes from "./routes/student.routes";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api", studentRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  res.status(404).json({ status: 404, message: error.message })
});

app.listen(process.env.PORT, () =>
  console.log(`App running on PORT ${process.env.PORT}`)
);
