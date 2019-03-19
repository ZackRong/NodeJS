var fs = require('fs');

var count = 0;
var readStream = fs.createReadStream('./test.txt');
var writeStream = fs.createWriteStream('./out.txt');

// 管道流
var readStream2 = fs.createReadStream('./test.txt');
var writeStream2 = fs.createWriteStream('./out-pipe.txt');

readStream.setEncoding('utf-8');

readStream.on('data', function(chunk){
  count += 1;
  console.log('第 ' + count + ' 次读取文件');
  writeStream.write(chunk, 'utf-8');
});

readStream.on('end', function(){
  writeStream.end();
});

readStream2.pipe(writeStream2);
