let express = require("express");
let friends = require("../data/friends");
let apiRouter = express.Router();

apiRouter.use(function (req, res, next) {
    console.log("Redirecting user from api...")
    next()
});

apiRouter.get("/friends", function(req, res) {
    res.send("test /api/friends");
});

apiRouter.get("/", function(req, res) {
    res.json(friends);
});

apiRouter.post("/", function (req, res) {
    console.log("post test");
})

module.exports = apiRouter;