const person = {
  name: "dalim",
  fruit: "kola",
  dish: "halim",
  friends: ["kalim", "talim", "palim"],
  isRich: false,
  money: 50000,
};
console.log(person);

//JSON-->
//convert to json--> json.stringify
const personJSON = JSON.stringify(person);
console.log(personJSON);
console.log(typeof personJSON);

//convert from json--> json.parse
const JSONOPerson = JSON.parse(personJSON);
console.log(JSONOPerson);
console.log(typeof JSONOPerson);
