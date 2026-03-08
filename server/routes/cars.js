import express from "express";
import { carData } from "../data/cars.js";
import { getCars } from "../controllers/cars.js";

const carRouter = express.Router();

carRouter.get("/", getCars);

carRouter.get("/:name", (req, res) => {
  const { name } = req.params;

  const car = carData.find(
    (car) => car.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
  );

  if (!car) {
    return res.status(404).json({ message: "404 - Car not found" });
  }

  const result = res.status(200).json(car);

  return result;
});

export default carRouter;
