import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { apiRoutes } from "./routes/api.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.use("/", apiRoutes);
