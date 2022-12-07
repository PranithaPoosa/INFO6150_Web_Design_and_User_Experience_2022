import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";

const app = express();
const cors = require("cors");

app.get("/test", (req, res) => {
  res.send("Hello from 24Carat");
});

app.listen(3001, () => {
  console.log('hello from 24Carat')
});

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

export default app;