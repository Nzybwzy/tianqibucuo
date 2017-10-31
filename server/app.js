/**
 * Created by nap on 16/12/16.
 */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

process.chdir(__dirname);

var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({storage: storage});

var logger = require('./util/logger');
var router = require('./routers');
var config = require('./local/config');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../', 'build')));

app.use(logger.routerLog);

router(app);

app.listen(config.server.port, '0.0.0.0');

logger.outlog({
    Log: 'server listen port ' + config.server.port
});


module.exports = app;