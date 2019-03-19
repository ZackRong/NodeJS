var fs = require('fs');

/**
 *获取指定路径下的所有文件
 *
 * @param {*} path
 */
function getAllFile(path) {
  try {
    if (!path) {
      throw new Error('请输入路径');
    }
    var stat = fs.statSync(path);
    if (!stat.isDirectory()) {
      throw new Error('该路径不是文件夹');
    }
    var fileList = [], str = '';
    function loop(path) {
      var files = fs.readdirSync(path);
      files.map(file => {
        var filePath = path + '/' + file;
        var stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
          loop(filePath);
        } else {
          fileList.push(filePath);
        }
      });
    }

    loop(path);
    if (fileList.length === 0) {
      str = path + '下没有文件！';
    } else {
      str = path + '下有以下文件：\n';
      for (var i = 0; i < fileList.length; i++) {
        str += fileList[i] + '\n';
      }
    }
    fs.writeFile('./file_statistics.txt', str, function(err){
      if (err) {
        throw err;
      }
    });
  } catch (err) {
    console.log(err)
  }
}

console.log('****************************')
console.log(process.argv);
console.log('****************************')
console.log();

getAllFile(process.argv[2]);