let express = require("express");
let path = require("path");
let htmlRouter = express.Router();

htmlRouter.use(function (req, res, next) {
    console.log("Redirecting user from html...")
    next()
});

htmlRouter.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname + "/../public/index.html"))
});

htmlRouter.get("/survey", function(req, res) {
    res.sendFile(path.resolve(__dirname + "/../public/survey.html"));
});

module.exports = htmlRouter;