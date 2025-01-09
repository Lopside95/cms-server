import { Router } from "express";
import { getItems } from "../controllers/items-controller";

const router: Router = Router();

router.get("/", getItems);

export default router;
