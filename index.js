const express=require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

dotenv.config({ path: "./config.env" });



mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successfull...");
  });

const port = process.env.PORT || 2500;

app.listen(port, () => {
  console.log('Server running on port ${port}');
});

module.exports = app;
