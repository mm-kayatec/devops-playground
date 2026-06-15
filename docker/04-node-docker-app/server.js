const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Docker Phase 2 Completed"
  });
});

app.listen(3000, () => {
  console.log("Server started");
});
