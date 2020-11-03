let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateTodos = () => {

    let todoTitle ="";

    for (i=0; i < arrayOfTodos.length; i++) {

   todoTitle = document.createTextNode(arrayOfTodos[i].title);  
   
      let todoItem = document.createElement("LI");

      todoItem.appendChild(todoTitle);

      todoList.appendChild(todoItem);

    }
  }

 