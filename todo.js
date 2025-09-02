const toDoContainer = document.querySelector('#todo-container');
const loadToDo = async function () {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const response = await fetch(url);
  const data = await response.json();

  //console.log(data);
  displayToDo(data);
};

const displayToDo = function (todos) {
  toDoContainer.innerHTML = '';
  todos.forEach(todo => {
    //console.log(todo);
    const toDoCard = document.createElement('div');

    //todo completed logic
    //conditional rendering
    todo.completed = todo.completed
      ? `<i class="fa-solid fa-square-check" style="color: #63E6BE;"></i>`
      : `<i class="fa-regular fa-square-check"></i>`;

    toDoCard.innerHTML = `
    <div class="todo-card">
        <p>${todo.id}.</p>
        <p>${todo.completed}</p>
        <h4>${todo.title}</h4>
    </div>`;
    toDoContainer.appendChild(toDoCard);
  });
};

loadToDo();
// const obj = {
//   userId: 2,
//   id: 31,
//   title: 'repudiandae totam in est sint facere fuga',
//   completed: false,
// };
