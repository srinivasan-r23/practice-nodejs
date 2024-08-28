const fs = require('fs');
const crypto = require('crypto');
process.env.UV_THREADPOOL_SIZE=8;

crypto.pbkdf2('password-1', 'salt', 500000, 50, 'sha512', (err, key) => {
    console.log('1- Key generated')
});

fs.readFile('./file.txt', 'utf8', () => {
    console.log('File reading');
});

crypto.pbkdf2('password-2', 'salt', 500000, 50, 'sha512', (err, key) => {
    console.log('2- Key generated')
});
crypto.pbkdf2('password-1', 'salt', 500000, 50, 'sha512', (err, key) => {
    console.log('3- Key generated')
});
crypto.pbkdf2('password-1', 'salt', 500000, 50, 'sha512', (err, key) => {
    console.log('4- Key generated')
});
crypto.pbkdf2('password-1', 'salt', 500000, 50, 'sha512', (err, key) => {
    console.log('5- Key generated')
});
crypto.pbkdf2('password-1', 'salt', 500000, 50, 'sha512', (err, key) => {
    console.log('6- Key generated')
});