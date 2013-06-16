
/*!
 * envelope
 *
 * envelope web-mail
 *
 * MIT
 */

/**
 * Module dependencies.
 */

var config = require('./config');
var http = require('http');
var app = require('app').configure(config);

/**
 * Web server.
 */

var server = module.exports = http.createServer(app);

/**
 * Listen.
 */

server.listen(config.port, config.host, function(){
  console.log('server is listening http://%s:%d', config.host, config.port);
});
