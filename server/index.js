"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send('12345');
});
app.listen(3001, function () {
    console.log("start server : http://localhost:3001");
});
