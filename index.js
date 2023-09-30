const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { PORT } = require("./src/config/envConfig");
const apiRoutes = require("./src/router/index");
// const db = require("./models/index");

const setUpandStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log("App started at PORT ", PORT);
  });
};

setUpandStartServer();
