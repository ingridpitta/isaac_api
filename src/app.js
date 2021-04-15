import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
console.log({basic: Buffer.from(`${process.env.USERNAME}:${process.env.PASSWORD}`).toString('base64')})
app.listen(process.env.PORT, () => console.log(`App running on PORT ${process.env.PORT}`));