const express = require("express");
const app = express();
const { serverConfig, logger } = require("./config");
const apiRoutes = require("./routes");
const { level, error } = require("winston");

app.use("/api", apiRoutes);

app.listen(serverConfig.PORT, () => {
  console.log("Server started running at PORT :: " + serverConfig.PORT);
  // logger.info("Server started running at PORT :: " + serverConfig.PORT);
});
