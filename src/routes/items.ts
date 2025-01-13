import { Router } from "express";
import {
  addItem,
  getItemById,
  getItems,
  updateItem,
} from "../controllers/items-controller";

const router: Router = Router();

router.get("/", getItems);
router.get("/:id", getItemById);
router.post("/", addItem);
router.put("/:id", updateItem);

export default router;
