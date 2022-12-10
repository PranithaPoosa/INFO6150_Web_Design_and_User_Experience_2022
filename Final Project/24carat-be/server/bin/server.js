import express from "express";
import logger from "morgan";
import mongoose from "mongoose";
import routes from "../routes";
import cookieParser from "cookie-parser";

const app = express();
const cors = require("cors");

app.get("/test", (req, res) => {
  res.send("Hello from 24Carat");
});

app.listen(3001, () => {
  //
});

// mongoose connection
mongoose.connect(
  "mongodb+srv://manideepak13:admin@cluster0.lgl9ija.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

routes(app);

export default app;
