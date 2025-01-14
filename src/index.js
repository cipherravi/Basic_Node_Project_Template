const express = require("express");
const app = express();
const { PORT } = require("./config");
const apiRoutes = require("./routes");

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log("Server started running at PORT :: " + PORT);
});
