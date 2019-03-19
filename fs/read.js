var fs = require('fs');

/** 
 * 异步读取文件。
 * 三个参数：path、encodeType、callback(err, data)
*/
fs.readFile('./test.txt', 'utf-8', function(err, data){
  // 出错了，抛出错误
  if (err) {
    throw err;
  }
  console.log(data);
});