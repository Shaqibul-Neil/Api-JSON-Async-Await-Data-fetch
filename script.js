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
const btnLoad = document.querySelector(".btn-load");
btnLoad.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
    response.json().then((data) => console.log(data))
  );
});
