var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello Node.JS</h1>')
  res.write('<p>This is my first Node.JS app.</p>')
  res.end();
}).listen(8080);

console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');
