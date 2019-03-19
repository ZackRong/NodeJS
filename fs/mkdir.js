var fs = require('fs');

/**
 * 新建文件夹。
 * 2个参数：path、callback
 * 文件夹存在时会报错，所以得先判断是否存在
 */
fs.exists('../dir', function(exist){
  if (!exist) {
    fs.mkdir('../dir', function(err){
      if (err) {
        throw err;
      }
    })
  }
})