require('./xyz.js');
const {calculateMultiply, calculateSum} = require('./calculate');
const data = require('./data.json');
const util = require('node:util');

console.log(util)
console.log(data);

calculateMultiply(1,4)


calculateSum(1,2);
console.log('im from app js');
console.log(global === globalThis);
console.log(this);
