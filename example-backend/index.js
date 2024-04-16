const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/test", (req, res) => {
  res.send("Got a POST request");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});