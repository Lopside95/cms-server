import { Router } from "express";
import { getFoods } from "../controllers/foods-controller";

const router: Router = Router();

router.get("/", getFoods);

export default router;
