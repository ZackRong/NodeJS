/**
 * module：node自带的对象。
 * module.exports：模块对外暴露的对象
 */

var filename = __filename;
var pathArray = filename.split('/');
var len = pathArray.length;

function fn1() {
  console.log(pathArray[len - 2] + '--' + pathArray[len - 1] + '--fn1');
}

function fn2() {
  console.log(pathArray[len - 2] + '--' + pathArray[len - 1] + '--fn2');
}

// module.exports = {
//   fn1: fn1,
//   fn2: fn2
// };
// 另一种暴露对象方法
exports.fn1 = fn1;
exports.fn2 = fn2;

