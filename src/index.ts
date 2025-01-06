import express, { Express } from "express";
import "dotenv/config";

const app: Express = express();

app.use(express.json());

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("CMS is running on", port);
});
