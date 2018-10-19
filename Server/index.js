const express = require('express');
const excersize = require('./excersize/controller');
const expressValidator = require('express-validator');

console.log("loading...");

const app = express();

const port = 3000; // 80 is HTTP's default
const server = "localhost";

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressValidator());
app.use("/static", express.static("static"));
app.use(excersize);
app.use(function (req, res, next) {
    console.log("failed to get url: " + req.originalUrl);
    res.status(404).render("404");
});
app.use(function (err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    console.error("ERROR! " + err.stack);
    res.status(500).render("500");
});

app.listen(port);

console.log(`listening on: http://${server}:${port}`);