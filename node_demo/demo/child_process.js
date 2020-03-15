const process = require('process');

process.on('message', (message) => {
  // 延时10s
  setTimeout(() => {
    console.log('收到父进程消息：', message);
    process.send('我收到你给我的消息了');
    process.exit();
  }, 10*1000);
});