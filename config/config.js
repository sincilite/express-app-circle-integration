(function() {
    "use strict";
    console.log(process.env);
    const common = require("./components/common");
    //const environment = require("./components/" + process.env.APP_ENV);

    //module.exports = Object.assign({}, common, environment);
    module.exports = Object.assign({}, common);
}());
