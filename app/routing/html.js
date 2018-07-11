let express = require("express");
let htmlRouter = express.Router();

htmlRouter.get("/", function() {
    app.sendFile()
});

htmlRouter.get("/api", function() {

});

module.export = htmlRouter;