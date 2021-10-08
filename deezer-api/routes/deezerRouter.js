import express from "express";
import controller from "../controller/deezerController.js";
const app = express();
app.use(express.json());

app.get("/artist/:artist", controller.getArtist);
app.get("/album/:album", controller.getAlbum);
app.get("/track/:track", controller.getTrack);

export { app as deezerRouter };
