import express, { Express } from "express";
import "dotenv/config";
import foods from "./routes/foods";
import shelters from "./routes/shelters";
import cors from "cors";
import items from "./routes/items";
import animals from "./routes/animals";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
export const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use("/items", items);
app.use("/foods", foods);
app.use("/animals", animals);
app.use("/shelters", shelters);

app.listen(port, () => {
  console.log("CMS is running on", port);
});
