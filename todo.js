const toDoContainer = document.querySelector('#todo-container');
const loadToDo = function () {
  const url = 'https://jsonplaceholder.typicode.com/todos';

  fetch(url).then(res =>
    res.json().then(data => {
      console.log(data);
      displayToDo(data);
    })
  );
};

const displayToDo = function (todos) {
  toDoContainer.innerHTML = '';
  todos.forEach(todo => {
    console.log(todo);
    const toDoCard = document.createElement('div');

    //todo completed logic
    todo.completed = todo.completed ? '✅' : '❌';

    toDoCard.innerHTML = `
    <div class="todo-card">
        <p>${todo.completed}</p>
        <h4>${todo.title}</h4>
    </div>`;
    toDoContainer.appendChild(toDoCard);
  });
};

loadToDo();
const obj = {
  userId: 2,
  id: 31,
  title: 'repudiandae totam in est sint facere fuga',
  completed: false,
};
