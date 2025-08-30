const name = "karthik";
let age = 24;

console.log(`hellow ${name} your age is ${age}`); // "hellow karthik your age is 24"

const massage = `this is line one
this is line two 
this is line three`;
console.log(massage);

const a = 5;
const b = 10;
console.log(`the some of ${a} and ${b} is ${a + b}`);

let names = "karthik";
let amount = 120;

console.log(`
     hello ${names}
     your billing amount is  ${amount}
     thank you for shoping
     date: ${new Date().toLocaleDateString()}
     `);

// Practice
const person = {
    nameone: "karthik",
    marks: [35, 45, 55],
};
console.log(`
    hellow ${person.nameone}
    your marks are ${person.marks}
    your total is ${person.marks[0] + person.marks[1] + person.marks[2]}
    your average is ${(person.marks[0] + person.marks[1] + person.marks[2]) / person.marks.length}`);


// Practice 2
const student = {
  name: "Karthik",
  marks: [50, 40, 30, 60]
};


const total = student.marks.reduce((sum, marks) => sum + marks, 0);
const average = total / student.marks.length;

console.log(`
  Hello ${student.name}
  Your marks are ${student.marks.join(" ")}
  Your total is ${total}
  Your average is ${average.toFixed(2)}
  result: ${average >= 40 ? "Pass" : "Fail"}
`);
const students = [
  { name: "Karthik", marks: [50, 40, 30, 60] },
  { name: "Anu", marks: [80, 90, 85, 95] },
  { name: "Ravi", marks: [20, 35, 25, 30] }
];

let topper = {}
let topperavarage = 0;
students.forEach(student => {
    const total = student.marks.reduce((sum, marks) => sum + marks, 0);
    const average = total / student.marks.length;
    if (average > topperavarage) {
        topperavarage = average;
        topper.name = student.name;
        topper.avarage = topperavarage;
    }
    
    console.log(`
        Hello ${student.name}
        Your marks are ${student.marks.join(" ")}
        Your total is ${total}
        Your average is ${average.toFixed(2)}
        result: ${average >= 40 ? "Pass" : "Fail"}
    `)
}
);
console.log(`🏆 Class Topper: ${topper.name} with Average ${topper.avarage}`);

