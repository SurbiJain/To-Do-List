





const todoList = [];
rendertoDoList();

function addToDo() {
  const name = document.querySelector('.js-input-Item').value;
  const dueDate = document.querySelector('.js-dueDate').value;

  todoList.push({
    name, dueDate
  });

  rendertoDoList()
}


function rendertoDoList() {
  let toDoListHTML = '';

  todoList.forEach((toDo, index)=>{
      const {name , dueDate} = toDo;
       toDoListHTML += 
      `<div>${name}</div>
       <div>${dueDate}</div>
       <button class = "delete"  onclick= "
          todoList.splice(${index}, 1);  
          rendertoDoList();
       "> Delete </button>`
  });

  document.querySelector('.js-list').innerHTML = toDoListHTML;
}



