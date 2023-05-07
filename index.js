let userName = "Bryant";
let age = 18;
let hasHobbies = false;
let points = [10, 20, 30];
let user = {
  name: "Ayrton",
  lastname: "Corniel García",
};

const PI = 3.141516;

console.log(userName);
console.log(age);
console.log(hasHobbies);
console.log(points);
console.log(user);

const names = ["Bryant", "Felix", "Yair"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

const showUserInfo = (userName, userAge) => {
  return `The username is ${userName}, the user is ${userAge} years old`;
};

console.log(showUserInfo("Ayrton Bryant", 18));

console.log(__dirname); //! da el directorio por consola en node.
console.log(__filename); //! da el nombre de el archivo y donde está ubicado.

console.log(module);

setInterval(() => {
  console.log("Hello World");
}, 2000); //!Ejecuta un codigo cada cierto tiempo.

setTimeout(() => {
  console.log("Hello World");
}, 2000); //!Ejecuta un codigo pasado un tiempo.
