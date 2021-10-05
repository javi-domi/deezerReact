import express from "express";
import controller from "../controller/deezerController.js";
const app = express();
app.use(express.json());

app.get("/api/v1/:artist", controller.getArtist);

export { app as deezerRouter };
