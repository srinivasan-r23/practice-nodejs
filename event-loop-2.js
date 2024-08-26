const fs = require('fs');
const a = 100;

setImmediate(() => console.log('setImmediate'));

Promise.resolve("Promise").then(()=>console.log('Promise'));

fs.readFile('./file.txt', 'utf8', () => {
    console.log('File read');
})

setTimeout(() => console.log('Timer expired'), 0);

process.nextTick(() => console.log('process.nextTick'));

function printA() {
    console.log('a = ', a);
}
printA();

console.log('Last line of the function');

//promise and nexttick is pushed priority queue, rest are all pushed to callback queue

//Output: 
// a= 100;
//last line of the function
//process.nexttick;
//promise
//timer expired
//setimmediate
//file read