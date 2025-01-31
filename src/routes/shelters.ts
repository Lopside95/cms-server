import { Router } from "express";
import { createShelter, getShelters } from "../controllers/shelters-controller";

const router: Router = Router();

router.get("/", getShelters);
router.post("/", createShelter);

export default router;
