import express from "express";
import cors from "cors";
import { deezerRouter } from "./routes/deezerRouter.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(deezerRouter);

app.listen(8080, () => {
  console.log("API listening on 8080");
});
