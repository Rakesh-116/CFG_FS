import express from "express";
import cors from "cors";
import config from "./config.js";
import connectDB from "./db/db.connect.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
