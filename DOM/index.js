function addTodo(){
   // write the code that reads the contents of the input box
   
   // clears the input box

   const element = document.getElementById('todoInput');
   const todo = element.value;

   // console.log(todo);


   // create a new todo on the  html dom

   const newDiv = document.createElement('div');
   newDiv.innerHTML = todo;

   // insert in the parent
   const parentDiv = document.getElementById('todos')
   parentDiv.appendChild(newDiv);
   element.value = ' ';
   
}