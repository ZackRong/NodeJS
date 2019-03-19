var http = require('http');
var fs = require('fs');

fs.exists('./test.txt', function(exist){
  if (exist) {
    fs.readFile('./test.txt', 'utf-8', function(err, data){
      if (err) {
        throw err;
      }
      http.createServer(function(req, res){
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        var htmlData = data.replace(/(\r)?\n/g, '<br/>');
        res.end(htmlData);
      }).listen(3000);
    });
  }
});
