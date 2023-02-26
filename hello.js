const sayHello  = function () {
  console.log("Hello, world");
}

sayHello();


const sayHello1  = function (name) {
  console.log("Hello, " + name);
}

sayHello1("Caliban");
sayHello1("Miranda");
sayHello1("Ferdinand");



const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 


const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');


const returnSayHello1  = function (name) {
  return "Hello, " + name;
}
const greeting1 = returnSayHello('John');
console.log(greeting);
