import { Router } from "express";
import { addItem, getItems, updateItem } from "../controllers/items-controller";

const router: Router = Router();

router.get("/", getItems);
router.post("/", addItem);
router.put("/:id", updateItem);

export default router;
