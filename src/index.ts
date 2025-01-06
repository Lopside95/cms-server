import express, { Express } from "express";
import "dotenv/config";

const app: Express = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("CMS is running on", process.env.PORT);
});
