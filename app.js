const express = reqaauire("express");
const morgan = require("morgan");
const cookiParser=require("cookie-parser")

if (process.env.NODE_ENV == "development") {
    app.use(morgan("dev"));
  }
