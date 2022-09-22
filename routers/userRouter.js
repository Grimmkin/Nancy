const express = require("express");
const { registerNewUser } = require("../controllers/userController.js");

userRouter = express.Router();

// retrieve the current users
userRouter.get('/users')

// register new user
userRouter.post("register", registerNewUser);

module.exports = {
    userRouter,
}