let express = require("express");
let app = express();
let htmlRouter = require("./app/routing/html.js");
let apiRouter = require("./app/routing/api.js")
const PORT = process.env.PORT || 4040;

app.listen(PORT, function() {
    console.log("Listening at http://localhost:" + PORT);
});

app.use(htmlRouter);
app.use("/api", apiRouter);

