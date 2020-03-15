const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  console.log('server start...');
  const { url } = req;
  if (url.indexOf('/test.html') > -1) {
    fs.readFile('./test.html', (err, data) => {
      if (err) {
        res.end('Error');
      } else {
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(data, 'utf8');
      }
    });
  } else {
    res.end();
  }
}).listen(3000);