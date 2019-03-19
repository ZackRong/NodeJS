var fs = require('fs');

fs.readFile('./test.txt', 'utf-8', function(err, data){
  if (err) {
    throw err;
  }
  /**
   * 写入文件
   * 3个参数：path、data、callback(err)
   * 文件不存在会新建一个文件，文件存在会替换内容
   */
  fs.writeFile('./test2.txt', data, function(err){
    if (err) {
      throw err
    }
  });

  // appendFile方法是追加内容
  fs.appendFile('./test3.txt', data, function(err){
    if (err) {
      throw err
    }
  })
})