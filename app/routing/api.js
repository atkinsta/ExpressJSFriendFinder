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
    res.json(friends);
});

apiRouter.get("/", function(req, res) {
    res.json(friends);
});

Array.prototype.compareAbs = function (array2) {
    let absDifference = 0;;
    for (var i=0; i<this.length; i++) {
        absDifference += (Math.abs(parseInt(this[i]) - parseInt(array2[i])));
    }
    return absDifference;
}

apiRouter.post("/", function (req, res) {
    let newFriend = req.body;
    let newStats = newFriend.scores;
    let bestScore = 1000;
    let bestMatch;
    friends.forEach(friend => {
        if (friend.scores.compareAbs(newStats) < bestScore) {
            bestScore = friend.scores.compareAbs(newStats);
            bestMatch = friend;
        }
    });
    friends.push(newFriend);
    res.json(bestMatch);
});

module.exports = apiRouter;