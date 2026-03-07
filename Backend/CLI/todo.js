
const fs = require('fs');

// const {Command} = require('commander');

// const program = new Command();

const FILE = "todo.json";

function readTodos() {
    const data = fs.readFileSync(FILE, "utf-8");
    if(!data) return [];
    return JSON.parse(data);
}

function saveTodos(todos) {
    fs.writeFileSync(FILE, JSON.stringify(todos, null, 2));
}

function addTodo(task) {
    const todos = readTodos();

    const newTodo = {
        id: todos.length+1,
        task: task,
        done:false
    }
    todos.push(newTodo);
    saveTodos(todos);
    console.log("Todo added");
}


function listTodos() {
    const todos = readTodos();
    if(todos.length === 0) {
        console.log("No todos found");
        return;
    }


    todos.forEach(todo => {
        console.log(`${todo.id}. ${todo.task}. ${todo.done ? "✅" : "❌" }`)
    });


}

function markDone(id) {
    const todos = readTodos();

    const todo = todos.find(t => t.id == id);
    if(!todo) {
        console.log("Todo not found");
        return;
    }

    todo.done = true;
    saveTodos(todos);
    console.log("✔ Todo marked as done")
}

function deleteTodo(id)  {
    let todos = readTodos();
    const newTodos = todos.filter(t => t.id != id) 
    saveTodos(newTodos);
    console.log("🗑 Todo deleted")
}


//CLI command handling

const command = process.argv[2];
const argument = process.argv[3];

if(command === "add") {

    addTodo(argument);

}
else if(command === "list") {
    listTodos();

}
else if(command === "done") {
    markDone(argument);
}
else if(command === "delete") {
    deleteTodo(argument);
}
else {
    console.log(`
        usage: 


        node todo.js add "task"
        node todo.js list
        node todo.js done <id>
        node todo.js delete <id>
        `);
}






