let a = 10, b = 4;
console.log("a+b =", a + b);
console.log("a - b =", a-b);
console.log("a * b =", a*b);
console.log("a / b =", a/b);
console.log("a % b =", a%b);
console.log("a ** b =", a**b);  // exponentiation
console.log("++a =", ++a);  // pre-increment
console.log("a++ =", a++);  // post-increment
console.log("a-- =", a--);  // post-decrement
console.log("--a =", --a);  // pre-decrement



// Comparison Operators

let x = 10, y = "10";
console.log("x == y", x == y);
console.log("x === y", x === y);
console.log("x != y", x != y);
console.log("x !== y", x !== y);
console.log("x > y", x > y);
console.log("x < y", x < y);
console.log("x >= y", x >= y);
console.log("x <= y", x <= y);


// Logical Operators

let p = true, q = false;
console.log("p && q",p && q);
console.log("p || q",p || q);
console.log("!p",!p);
console.log("!q",!q);

// Assignment Operators

let c = 5;
c += 3; // c = c + 3
console.log("c += 3", c);
c -= 2; // c = c - 2
console.log("c -= 2", c);

c *= 4; // c = c * 4
console.log("c *= 4", c);  

c /= 2; // c = c / 2
console.log("c /= 2", c);

c %= 3; // c = c % 3
console.log("c %= 3", c);   

c **= 2; // c = c ** 2
console.log("c **= 2", c);

console.log(c)


// Bitwise Operators

let m = 5; // 0101
let n = 3; // 0011

console.log("m & n", m & n); // AND
console.log("m | n", m | n); // OR
console.log(a ^ b);


// Ternary Operator


let age = 21;
let message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message); // "You are an adult"


let score = 40;
let grade = score >= 90 ? "A" :
            score >= 75 ? "B" :
            score >= 50 ? "C" : "F";
console.log(grade); // "B"


// typeof and instanceof

typeof variable

console.log(typeof 42);           // "number"
console.log(typeof "Hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof {a:1});        // "object"
console.log(typeof null);         // "object" (special case)
console.log(typeof function(){}); // "function"


class Animal {}
class Dog extends Animal {}

let dog = new Dog();

console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true
console.log(dog instanceof Array);  // false






// learnings
// 1. Arithmetic operators perform basic mathematical operations.
// 2. Comparison operators compare values and return boolean results.
// 3. Logical operators combine boolean values.
// 4. Assignment operators assign values to variables, with shorthand forms for common operations.
// 5. Bitwise operators perform operations on binary representations of numbers.
// 6. The ternary operator provides a shorthand for conditional expressions.
// 7. The `typeof` operator returns the data type of a variable.
// 8. The `instanceof` operator checks if an object is an instance of a specific class or constructor function.