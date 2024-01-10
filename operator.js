// numeric string used with + gives string type
var result ='3'+2
console.log (result);
console.log (typeof result);
var result ='3' +true
console.log (result);
var result ='3' +null
console.log(result);
var result ='3' +undefined
console.log(result);
var result ='true' + undefined
console.log(result);
var result ='4'- true
console.log(result);
var result =4- false
console.log (result);
var result= 4 + true
console.log(result)
var a=10
var b=a++
console.log(b);

var a=20
var b=++a
console.log(b);
// implicite string conversion to Number 
var result ='4'-'2'
console.log (result);
var result ='4' -2
console.log(result);
var result ='10'-'3'
console.log (result);
var result ='15'-3
console.log (result);
const fs  = require ("fs");
fs.writeFileSync("read.txt","welcome to jawala bk");