/**
 * Created by tsv on 02.05.16.
 */

process.env.TZ = 'Asia/Irkutsk';

var express = require('express');
var mysql = require('mysql');
var app = express();
var routes = require('./routes/routes.js');

routes.setRoutes(app);

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});