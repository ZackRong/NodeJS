const process = require('process');
const fork = require('child_process').fork;

// 异常捕获事件，放在最前面，不然在其前面的异常不会被捕获到
process.on('uncaughtException', (err) => {
  console.log('未检测的异常捕获：', err);
});

const childProcess = fork('./child_process.js');
childProcess.send('parent message', (err) => {
  if (err) {
    console.log('给子进程发送消息失败，', err);
  }
});

childProcess.on('message', (message) => {
  console.log('收到子进程消息', message);
});

process.on('exit', (code) => {
  console.log('这个内容能输出');
  setTimeout(() => {
    console.log('进程已经退出，这个内容不能输出');
  }, 0);
  console.log('进程退出了，退出码是：', code);
});

process.on('SIGINT', (signal) => {
  console.log('信号事件：', signal);
});

// 这个方法不存在
noExistFun();