let path = require('path');
console.log(__dirname, '__dirname==');
console.log(path.resolve(), 'resolve');
console.log(path.resolve(__dirname), '__dirname');

let fs = require('fs');
fs.writeFileSync('nodeWrite.txt', 'hello world', 'utf-8');
const data = fs.readFileSync('nodeWrite.txt', 'utf-8');
console.log(data, 'data==')