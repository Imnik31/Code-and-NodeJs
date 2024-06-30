// console.log("hey");
// console.log("hey , I am Nikhil !");


// window objects are not avilable in nodejs 

// function add(a,b){
//     return a+b;
// }
// console.log(add(3,1));

const math = require("./math")  // (add, sub instead of math -> called destructre) and search in current dirctory
// const math = require("fs") // it will search in own directory

console.log(math.add(2,7));

// npm init for node package manager.