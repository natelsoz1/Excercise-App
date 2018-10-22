const express = require('express');
const excersize = require('./excersize/controller');
const expressValidator = require('express-validator');

console.log("Server started");

const app = express();

const port = 3000;
const server = "localhost";

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressValidator());
app.use("/static", express.static("static"));
app.use(excersize);

app.listen(port);

console.log(`listening on: http://${server}:${port}`);