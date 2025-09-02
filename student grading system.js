const student = {
    name: 'John Doe',
    age: 20,
    marks: [85, 92, 78, 90, 88],
gettotal(){
    return this.marks.reduce((sum, marks) => sum + marks, 0);
},
getavarage(){
    return this.gettotal() / this.marks.length
},

grade (){
    switch(true){
        case this.getavarage() >= 90:
            return 'A';
        case this.getavarage() >= 80:
            return 'B';
        case this.gettotal() >= 70:
            return 'C';
        case this.getavarage() >= 60:
            return 'D';
        case this.getavarage() < 60:
            return 'E';
        case this.getavarage() < 50:
            return 'F';
}

}
}

console.log(`
Name: ${student.name}
Total Marks: ${student.gettotal()}
avarage: ${student.getavarage()}
grade: ${student.grade()}`
);

let todos = []

function addtodo(task){
    todos.push(task);
    console.log(`Added task: ${task}`);
}

addtodo('Buy groceries');
addtodo('Walk the dog');
addtodo('Read a book');
function showtodos(){
    console.log("To-Do List:");
    todos.forEach((t, i) => console.log(`${i + 1}. ${t}`));
}
function removetask(task){
    todos = todos.filter(t => t !== task);
    console.log(`Removed task: ${task}`);
}
 showtodos();
removetask('Walk the dog');
 showtodos();
