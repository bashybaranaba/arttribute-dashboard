const express = require("express");
const app = express();
const catRoutes = require("./routes/cats.route");
const todoRoutes = require("./routes/todo.route");

app.use("/cats", catRoutes);
app.use("/todos", todoRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
