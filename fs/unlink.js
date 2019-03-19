var fs = require('fs');

/** 
 * 删除文件
 * 2个参数：path、callback(err)
*/
// fs.unlink('./test3.txt', function(err){
//   if (err) {
//     throw err;
//   }
// });

// 删除不存在的文件，会抛出错误。所以得先判断是否存在
// fs.exists('./no-exist.txt', function(exist){
//   if (exist) {
//     fs.unlink('./no-exist.txt', function(err){
//       if (err) {
//         throw err;
//       }
//     });
//   } else {
//     console.log('文件不存在！')
//   }
// });

existAndUnlink('./test2.txt');
existAndUnlink('./un-exist.txt');

function existAndUnlink(path) {
  fs.exists(path, function(exist){
    if (exist) {
      fs.unlink(path, function(err){
        if (err) {
          throw err;
        }
      })
    } else {
      console.log(path + ' 文件不存在！');
    }
  })
}