const fs = require('fs');

const a = 100;

setImmediate(() => console.log('SetImmediate'));

fs.readFile('./file.txt', 'utf8', () => {
    console.log('File read');
});

setTimeout(() => console.log('Timeout'), 0);

function printA() {
    console.log('a = ', a);
}
printA();

console.log('Last line of the file');

