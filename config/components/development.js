(function() {
    "use strict";

    const mysql = require("mysql");

    var connection = mysql.createConnection({
        host: "172.17.0.2",
        user: "root",
        password: "test",
        database: "teamster"
    });

    const config = {
        db: connection
    };

    module.exports = config;
}());
