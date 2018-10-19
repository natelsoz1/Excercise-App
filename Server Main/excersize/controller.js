const express = require("express");
const User = require("./model");

const app = express.Router();
app.use(express.json());

app.post('/user', function(req, res, next) {
    const user = new User(req.body.name);
    user.push(user);
    res.send(user);
    });