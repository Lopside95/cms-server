import { Router } from "express";
import { getShelters } from "../controllers/shelters-controller";

const router: Router = Router();

router.get("/", getShelters);

export default router;
