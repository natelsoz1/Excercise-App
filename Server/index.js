const express = require('express');
const excersize = require('./excersize/controller');
const expressValidator = require('express-validator');

console.log("Server started");

const app = express();

const port = 80;
const server = "localhost";

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressValidator());
app.use("/static", express.static("static"));
app.use(excersize);

app.listen(port);

console.log(`listening on: http://${server}:${port}`);