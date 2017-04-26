'use strict';

const path = require("path");
const express = require("express");
const expresshbs = require("express-handlebars");
const moment = require("moment");
const config = require("./config/config.js")

// Constants
const PORT = 80;

// App
const app = express();


/*config.db.connect(function(err) {
    if (err) {
        console.log("Error connecting to database\n" + err);
        return
    } else {
        console.log("Connection successful");
    }
});*/

app.engine(".hbs", expresshbs({
    defaultLayout: 'main',
    extname: ".hbs",
    layoutDir: path.join(__dirname, "views/layouts")
}));

app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

app.get('/', (request, response) => {
    response.render("home", {
        name: "Michael"
    });
});

/*app.get('/users', (request, response, next) => {
    config.db.query("SELECT * FROM users", function (err, rows) {
        if (err) {
            return next(err);
        }
        response.render("users", {
            users: rows
        });
    });
});*/

app.use((err, request, response, next) => {
    console.log(err);
    response.status(500).send("Something went wrong");
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

