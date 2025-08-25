console.log(x); // undefined
var x = 5;
let y = 10;
console.log(y); // ReferenceError: Cannot access 'y' before initialization


var globalVar = "I am global";
let globalLet = "iam also global";
function test() {

    var localVar = "I am local";
    let localLet = "I am also local";

    console.log(globalVar); // Accessible
    console.log(globalLet); // Accessible
    console.log(localVar);  // Accessible
    console.log(localLet);  // Accessible
}

console.log(globalVar); // Accessible
console.log(globalLet); // Accessible 
// console.log(localVar);  // ReferenceError: localVar is not defined
// console.log(localLet);  // ReferenceError: localLet is not defined

// console.log(a); // undefined (hoisted var)
// var a = 1;

// console.log(b); // ReferenceError (let is in TDZ)
// let b = 2;

hoistedFunc();  // Works fine

function hoistedFunc() {
  console.log('Function is hoisted!');
}

