var express = require('express');
var path = require('path');

var app = express();

// 获取静态文件文件夹位置
var static = express.static(path.join(__dirname, 'static'));
// 在该服务器使用该文件夹的静态文件
app.use(static);

app.get('*', function(req, res, next){
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  next();
});

app.get('/', function(req, res){
  res.end('这是根目录');
});

app.get('/a', function(req, res){
  res.end('进入a路径了');
});

app.listen(3000);
