const person = {
    nameone: "karthik",
    age: 31,
    village: "manubolu"
};

console.log(person.nameon, person.age);
console.log(person["nameone"], person["age"]);
let beverage = (person.age >= 18) ? "Beer" : "Juice";      
console.log(beverage); // "Beer"


const car = new Object();

car.make = "Toyota";
car.model = "Camry";
car.year = 2020;
car["color"] = "blue";

console.log(car);

car.make = "Honda";
console.log(car)
car["year"] = 2021;
console.log(car)
delete car.color;
console.log(car)

const names = ["karthik", "seenu", "ramu", "ravi", "babu"];
// names.push("suresh")// adds to last
// console.log(names);

// // names.pop(); // removes last element

// names.unshift("rama"); //adds to first
// console.log(names);

// how to remove purticiular element
// names.splice(2, 1); // removes 1 element at index 2
// console.log(names);

// how to update purticiular element
names[3] = "kumar"; // updates element at index 3  
console.log(names); 

// Map()

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// filter()
const age = [12, 17, 18, 16, 32];
const adults = age.filter(num => num >= 18);
console.log(adults); // [18, 24, 32]
// reduce()
const sum = numbers.reduce((a, b) => a + b, 0);
console.log(sum); // 15

// forEach()
names.forEach(name => console.log(name));
// Output each name in the array

// find()
const ramu = names.find(name => name === "ramu");

console.log(ramu); // "ramu"
const students = [
  { name: "Karthik", grade: "A" },
  { name: "Anu", grade: "B" },
  { name: "Ravi", grade: "A" }
];

const topStudent = students.find(student => student.grade === "A");

console.log(topStudent); 
const topStudents = students.filter(student => student.grade === "A");

console.log(topStudents);

const student = {
  name: "Karthik",
  marks: [45, 60, 72, 88, 50],
  grade: "",



  // Method to calculate average using reduce()
  calculateAverage() {
    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  }
};
console.log("Average Marks:", student.calculateAverage()); 
if (student.calculateAverage() >= 60) {
    student.grade = "A";

}
console.log(student);

const increment = student.marks.map(marks => marks + 5);
console.log(increment);

const above50 = student.marks.filter(mark => mark > 50);
console.log("Marks above 50:", above50);


