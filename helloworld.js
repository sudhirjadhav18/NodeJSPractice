
var http = require('http');
var dt = require('./dateTimeModule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.getDateTime());
    res.write("URL: " + req.url);
    res.end();
}).listen(8080);