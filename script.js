// const person = {
//   name: "dalim",
//   fruit: "kola",
//   dish: "halim",
//   friends: ["kalim", "talim", "palim"],
//   isRich: false,
//   money: 50000,
// };
//console.log(person);

//JSON-->
//convert to json--> json.stringify
//const personJSON = JSON.stringify(person);
// console.log(personJSON);
// console.log(typeof personJSON);

//convert from json--> json.parse
//const JSONOPerson = JSON.parse(personJSON);
//console.log(JSONOPerson);
// console.log(typeof JSONOPerson);

//Load Json Data using Fetch Function
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// );
//fetch kore ane akta promise die then chain kore then die jekhane akta response dei response die setake json e convert kore then promise kore erpor abr chain kore then die erpor data take show kore. respnose/data jekono name dea jabe.
//console.log(result);

//showing data on clicking button
const btnLoad = document.querySelector('.btn-load');
const loadData = function () {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    //promise of response-->promise of json data
    .then(response => response.json().then(data => console.log(data)))
    .catch(error => console.log('My Error', error)); //cube gula method ar brick gula property
};
btnLoad.addEventListener('click', loadData);
// const btnLoad = document.querySelector(".btn-load");
// btnLoad.addEventListener("click", function () {
//   fetch("https://this-url-does-not-exist.com/data")
//     .then((response) => response.json().then((data) => console.log(data)))
//     .catch((error) => console.log("My Error", error));
// });
//fetch error catch korte hole then er byre dite hbe

//showing post on clicking button
const btnPost = document.querySelector('.btn-post');
const containerPost = document.querySelector('#post-container');
const postData = function () {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  fetch(url)
    .then(res => res.json())
    .then(data => {
      //console.log(data);
      displayPost(data);
    });
};

const displayPost = function (posts) {
  //clearing container so that it doesnt exceed 100 on each click. if we dont do it then posts will 100,200....
  containerPost.innerHTML = '';
  posts.forEach(post => {
    //create html element
    const postCard = document.createElement('div');
    postCard.classList.add('post-card');
    //postCard.innerText = post.title;
    console.log(post);
    postCard.innerHTML = `
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
        <p class="post-user">${post.id}</p>
    `;
    //add div to container
    containerPost.appendChild(postCard);
  });
};
btnPost.addEventListener('click', postData);
//without click call by default
//postData();
