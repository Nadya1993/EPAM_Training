var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('.');
const uuidv4 = require('uuid/v4');


function accept(req, res) {
  if (req.url == '/uuid') {
    // setTimeout(function() {
    //   res.end(uuidv4());
    // }, 1500);
    res.end(uuidv4());
  } else {
    file.serve(req, res);
  }
}


// ------ этот код запускает веб-сервер -------

if (!module.parent) {
  http.createServer(accept).listen(8080);
} else {
  exports.accept = accept;
}