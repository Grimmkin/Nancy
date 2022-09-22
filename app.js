const mongoose = require("mongoose");
const express = require("express");
const { userRouter } = require("./routers/userRouter.js");
require("./model/mongodb.js");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use('/user', userRouter);
module.exports = app;