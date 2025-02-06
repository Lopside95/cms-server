import { Router } from "express";
import { createFood, getFoods } from "../controllers/foods-controller";

const router: Router = Router();

router.get("/", getFoods);
router.post("/", createFood);

export default router;
