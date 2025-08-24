let score = 76;

if (score > 35) {
    console.log("passed");
}else{
    console.log("failed");
}


if (score > 95) {
    console.log("excellent");
}else if(score > 90){
    console.log("good");
} else if(score > 75){
    console.log("avarage");
}else if(score > 50){
    console.log("passed");
}else{
    console.log("failed");
}

let day = "Monday"
switch (day) {
  case 1: console.log("Monday");
  case 2: console.log("Tuesday");
  default: console.log("Invalid day");
}

// let i = 20

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// let j = 0;
// while (true) {
//     console.log(j);
//     j++;
// }

// let k = 0;

// do {
//     console.log(k);
//     k++;
// } while (k < 5);

// const fruits = ["apple", "banana", "cherry"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// const person = { name: "Karthik", age: 31, country: "India" };

// for (key in person) {
//     console.log(key, person[key]);
// }
// console.log(person.name); // true

const people = [
  { name: "Karthik", age: 31 },
  { name: "Anu", age: 25 },
  { name: "Ravi", age: 29 }
];

console.log(people[0].age);


