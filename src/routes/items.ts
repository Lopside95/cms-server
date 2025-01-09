import { Router } from "express";
import { addItem, getItems } from "../controllers/items-controller";

const router: Router = Router();

router.get("/", getItems);
router.post("/", addItem);

export default router;
