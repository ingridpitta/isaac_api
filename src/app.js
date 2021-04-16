import express from "express";
import dotenv from "dotenv";
import studentRoutes from "./routes/student.routes";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api", studentRoutes);

app.listen(process.env.PORT, () => console.log(`App running on PORT ${process.env.PORT}`));