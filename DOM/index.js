let todoIndex = 1;

function addTodo() {
  // write the code that reads the contents of the input box

  // clears the input box

  const element = document.getElementById("todoInput");
  const todo = element.value;
  if(todo == "") return;
  element.value = "";
  // create a new todo on the  html dom

  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "todo " + todoIndex);
  // 1.    newDiv.innerHTML = "<span>" + todo + "</span> <button> Delete todo </button>";
  // newDiv.innerHTML = todo;

  const newSpan = document.createElement("span");
  newSpan.innerHTML = todo;
  newDiv.appendChild(newSpan);
  const button = document.createElement("button");
  button.innerHTML = "Delete todo";
  button.setAttribute("onClick", "deleteTodo(" + todoIndex + ")");

  newDiv.appendChild(button);

  // // insert in the parent
  const parentDiv = document.getElementById("todos");
  parentDiv.appendChild(newDiv);
  element.value = " ";
  todoIndex++;
}

function deleteTodo(index) {
  const divElement = document.getElementById("todo " + index);
//   divElement.parentElement.removeChild(divElement);
  document.getElementById("todos").removeChild(divElement);
}



function editTodo(){

}
