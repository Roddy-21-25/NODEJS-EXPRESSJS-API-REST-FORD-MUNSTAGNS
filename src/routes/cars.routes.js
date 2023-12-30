import { Router } from "express";
import {
  home,
  getCars,
  getCarsById,
  getCarsByName,
  getCarsByYear,
} from "../controllers/car.controllers.js";

const router = Router();

//?https://fordmustang-api.up.railway.app/api/
router.get("/", home);
router.get("/getCars", getCars);
router.get("/getCarsById/:id", getCarsById);
router.get("/getCarsByName/:name", getCarsByName);
router.get("/getCarsByYear/:year", getCarsByYear);

export default router;
