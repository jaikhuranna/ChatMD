//A express server, which will handle api

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

app.post("/", (req, res) => {
  res.send({ message: "hekko work" });
});

app.listen(port, () => {
  console.log("exp app");
});