var fs = require('fs');

/**
 * 重命名文件名、文件夹名
 * 3个参数：oldPath、newPath、回调
 * 文件（夹）不存在时会报错，所以得先判断是否存在
 */
fs.rename('test.txt', 'test2.txt', function(err){
  if (err) {
    throw err;
  }
});

fs.rename('dir', 'dir2', function(err){
  if (err) {
    throw err;
  }
});

fs.rename('../dir', '../dir2', function(err){
  if (err) {
    throw err;
  }
});