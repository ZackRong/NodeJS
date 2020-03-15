const fs = require('fs');
const path = require('path');

// 读写内容
fs.readFile(path.resolve(__dirname, './source', './test1.txt'), (err, data) => {
  if (err) {
    return;
  }
  fs.writeFile(path.resolve(__dirname, './dest', './test1.copy.txt'), data, () => {

  });
});

let buffer = Buffer.alloc(256);
fs.open(path.resolve(__dirname, './source', './test2.txt'), (err, fd) => {
  if (!err) {
    fs.read(fd, buffer, 0, buffer.byteLength, 0, (err, bytesRead) => {
      if (err) {
        console.log('error：', err);
        return;
      }
      buffer = buffer.slice(0, bytesRead);
      console.log(bytesRead, buffer.toString());
      fs.close(fd, () => {
        console.log('file close')
      });
      console.log(buffer.toString(), 'buf')
      fs.open(path.resolve(__dirname, './dest', './test2.copy.txt'), 'w', (err, fd) => {
        if (err) {
          console.log('err');
          return;
        }
        fs.write(fd, buffer, 0, buffer.byteLength, 0, (err) => {
          if (!err) {
            fs.close(fd, () => {
              console.log('file close')
            });
          }
        })
      });
    });
  }
});

const readStream = fs.createReadStream(path.resolve(__dirname, './source', './test3.txt'));
const writeStream = fs.createWriteStream(path.resolve(__dirname, './dest', './test3.copy.txt'));

readStream.on('open', () => {
  console.log('open source file');
});

writeStream.on('pipe', () => {
  console.log('pipe')
});

readStream.pipe(writeStream);