const fs = require('fs');
const https = require('https');

console.log('Hello World');

var a = 100;
var b = 12232;

https.get('https://dummyjson.com/products/1', (res) => {
    console.log('inside fetch');
});

setTimeout(() => {
   console.log('Settimeout executed') 
}, 4000);

//blocking code since its sync (since its JS sync function)
console.log('sync started')
fs.readFileSync('./file.txt', 'utf8')
console.log('sync done')

fs.readFile('./file.txt', 'utf8', (err, data) => {
    console.log(data);
})

function multiply(a,b) {
    console.log('>> mul', a * b)
    return a * b;
}
multiply(a, b);

console.log('im done')