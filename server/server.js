import express from "express";
import cors from "cors";
import carRouter from "./routes/cars.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../client")));

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/cars", carRouter);

app.use((req, res) => {
  res.send("404 - Page not found");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
