var http = require('http');
var url = require('url');

var server = http.createServer((req, res) => {
  var parseUrl = url.parse(req.url, true); //
  console.log(parseUrl);
  var path = parseUrl.pathname;
  console.log(path);
  var trimmedPath = path.replace(/^\/+|\/+$/g, '');
  res.end('hello world\n'); //This method signals to the server that all of the response headers and body have been sent; 

  console.log('Request received on path: ' + trimmedPath);
});




server.listen(3000, () => {
  console.log('listening on 3000');
});