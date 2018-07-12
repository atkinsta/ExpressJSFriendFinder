let express = require("express");
let bodyParser = require("body-parser");
let friends = require("../data/friends");
let apiRouter = express.Router();

apiRouter.use(bodyParser.urlencoded({ extended: true }));
apiRouter.use(bodyParser.json());

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
    var newFriend = req.body;
    friends.push(newFriend);
    console.log(friends);
});

module.exports = apiRouter;