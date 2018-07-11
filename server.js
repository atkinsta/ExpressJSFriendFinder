let express = require("express");
let app = express();
let htmlRouter = require("/routing/html.js");
let apiRounter = require(__dirname + "app/routing/api.js")
const PORT = 4040;

app.listen(PORT, function() {
    console.log("Listening at http://localhost:" + PORT);
});

app.use(htmlRouter);
app.use(apiRouter);