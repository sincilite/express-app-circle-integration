"use strict";

const common = require("./components/common");
const environment = require("./components/"+process.env.APP_ENV);

module.exports = Object.assign({}, common, environment);