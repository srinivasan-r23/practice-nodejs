const crypto = require('crypto');

console.log('Started');

var a = 1213;
var b = 34234;

//password base key derivative function
crypto.pbkdf2Sync('password123', 'salt', 5000000, 50, 'sha512');
console.log('first key generated')

crypto.pbkdf2('password123', 'salt', 500000, 50, 'sha512', (err, data) => {
    console.log(data, 'second key is generated');
})

setTimeout(() => {
    console.log('settimeout call me ryt now')
}, 0) // trust issues with settimeout.

const multiply = (a, b) => {
    return a * b;
}

const c = multiply(a, b);

console.log('c', c);

console.log('End')