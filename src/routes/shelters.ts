import { Router } from "express";
import { addShelter, getShelters } from "../controllers/shelters-controller";

const router: Router = Router();

router.get("/", getShelters);
router.post("/", addShelter);

export default router;
