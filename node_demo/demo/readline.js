const readline = require('readline');
const fs = require('fs');
const path = require('path');

const writeStream = fs.createWriteStream('./dest/test.js')
const allQuestions = ['姓名', '年龄', '性别'];
let allInputs = [];

let index = 0;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  // output: writeStream,
  prompt: allQuestions[0] + '：'
});

rl.prompt();
// rl.question('名字：', (answer) => {
//   console.log(answer);
//   // rl.close();
// });
// rl.question('年龄：', (answer) => {
//   console.log(answer);
//   // rl.close();
// });
rl.on('line', (input) => {
  allInputs[index] = input;
  index++;
  if (index === allQuestions.length) {
    rl.close();
    // console.log(allInputs)
    // 将内容写入文件
    let result = [];
    allInputs.map((item, index) => {
      result.push(`${allQuestions[index]}：${item}`);
    });
    // console.log(result)
    const buffer = Buffer.from(result);
    // console.log(buffer)
    fs.writeFile(path.resolve(__dirname, './dest', './readline.result.js'), result.join('\n'), (err) => {
      if (err) {
        console.log(err);
      }
    });
  } else {
    rl.setPrompt(allQuestions[index] + '：');
    rl.prompt();
  }
});

// 按行读取文件
const rl2 = readline.createInterface({
  input: fs.createReadStream('./source/test3.txt'),
});

rl2.on('line', (line) => {
  console.log(line);
});
rl2.on('close', () => {
  console.log('关闭了');
});
