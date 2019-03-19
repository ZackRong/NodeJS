var express = require('express');

var router = express.Router();

router.get(['/', '/edit'], function(req, res, next){
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
  next();
});

router.get('/', function(req, res){
  res.end('通过express Router进入的首页');
});

router.get('/edit', function(req, res){
  res.end('id是：' + req.query.id);
});

router.get('/img', function(req, res){
  res.send('<img src="banner.jpeg" />');
});

router.get('/redirect', function(req, res){
  res.redirect('/');
});

module.exports = router;
