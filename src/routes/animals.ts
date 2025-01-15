import { Router } from "express";
import { getAnimals } from "../controllers/animals-controller";

const router: Router = Router();

router.get("/", getAnimals);

export default router;
