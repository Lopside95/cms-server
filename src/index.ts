import express, { Express } from "express";
import "dotenv/config";
import items from "./routes/items";
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use("/items", items);

app.listen(port, () => {
  console.log("CMS is running on", port);
});
