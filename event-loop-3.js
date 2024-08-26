const fs = require('fs');

setImmediate(() => console.log('SetImmediate'));

setTimeout(() => console.log('Timeout'), 0);

Promise.resolve('Promise').then(console.log);

fs.readFile('./file.txt', 'utf8', () => { // when it executes, event loop resumes from poll, as it stops at poll.

    setTimeout(() => console.log('settimeout-1'), 0)

    process.nextTick(() => console.log('nexttick-1'));

    setImmediate(() => console.log('SetImmediate-1'));
    
    console.log('File reading CB');
});



process.nextTick(() => console.log('NextTick'));

console.log("last line of the file");

//last line of the file
//next tick
//promise
//timeout
//setimmediate
//file reading cb
// nexttick-1
//setimmediate-1
//settimeout-1





