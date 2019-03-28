var fs = require('fs');
var path = require('path');
var inquirer = require('inquirer');
var basePath = __dirname + '/functions';
fs.readdir(basePath, function(err, folders){
  if (err) {
    throw err;
  }
  var dirs = [];
  folders.map(function(file){
    var stat = fs.statSync(basePath + '/' + file);
    console.log(file, stat.isDirectory())
    if (stat.isDirectory()) {
      dirs.push(file);
    }
  });
  
  inquirer.prompt({
    type: 'input',
    name: 'name',
    message: '请输入模块名，模块名必须短线小写word连接，示例 hello-world：',
    validate: function(answer) {
      var moduleName = answer;
      var moduleExist = dirs.filter(item => item === moduleName).length ? true : false;
      if (moduleExist) {
        return '模块已经存在';
      }
      return true;
    }
  }).then((answer) => generateModule(answer));
});

function generateModule(answer) {
  var name = answer.name;
  var folderPath = './functions/' + name;
  fs.mkdir(path.resolve(__dirname, folderPath), function(err){
    if (err) {
      throw err;
    }
    var indexJSContent = `var fs = require('fs');
console.log(123);`
    fs.writeFile(folderPath + '/index.js', indexJSContent, function(err) {
      if (err) {
        throw err;
      }
    })
  })
}