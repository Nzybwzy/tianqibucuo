/**
 * Created by nap on 16/12/19.
 */
var express = require('express');
var routerLog = express.Router();
var colors = require('colors');
var _ = require('underscore');

colors.setTheme({
    silly  : 'rainbow',
    input  : 'grey',
    verbose: 'cyan',
    prompt : 'red',
    info   : 'green',
    data   : 'blue',
    help   : 'cyan',
    warn   : 'yellow',
    debug  : 'magenta',
    error  : 'red'
});

routerLog.use('*', function (req, res, next) {
    
    var log = {};
    
    log[req.method] = '';
    log['PATH'] = req.originalUrl;
    outlog(log);
    outlog('BODY', JSON.stringify(req.body));
    next();
});


function outlog(title) {
    
    var data = '';
    var i = 0;
    
    if (typeof title === 'string') {
        data += '[' + title.green + '] ';
        
        for (i = 1; i < arguments.length; i++) {
            data += arguments[i];
        }
        
    } else {
        
        for (i in title) {
            if (typeof title[i] === 'string') {
                data += '[' + i.green + '] ' + title[i];
            } else {
                data += '[' + i.green + '] ' + title[i].value[title[i].color];
            }
        }
    }
    
    console.log(data);
}

module.exports = {
    outlog   : outlog,
    routerLog: routerLog
};