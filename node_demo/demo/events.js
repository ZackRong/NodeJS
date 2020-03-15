const EventEmitter = require('events');

class Main extends EventEmitter{};

const Demo = new Main();

Demo.on('error', () => {
  console.log('出错了');
});

// 绑定事件之前触发事件，没响应
Demo.emit('trigger');

Demo.on('trigger', (a, b) => {
  console.log('trigger：', a, b);
});

Demo.emit('trigger', 'a', 'b');
Demo.emit('trigger', 'a2', 'b2');

Demo.once('triggerOnce', () => {
  console.log('只触发一次');
});
Demo.emit('triggerOnce');
Demo.emit('triggerOnce');

// 移除监听器后触发不起作用
Demo.removeAllListeners('trigger');
Demo.emit('trigger', 'a1', 'b1');

Demo.emit('error');