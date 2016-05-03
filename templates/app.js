/**
 * Created by tsv on 02.05.16.
 */

process.env.TZ = 'Asia/Irkutsk';

var express = require('express');
var mysql = require('mysql');
var app = express();
var routes = require('./routes/routes.js');

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

routes.setRoutes(app);

app.get('/test', function (req, res) {
    res.send('Hello World')
});

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});