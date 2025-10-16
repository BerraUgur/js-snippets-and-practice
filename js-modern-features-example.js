/*
Features used in this code:
1-Template Literals
2-Arrow Functions
3-Destructuring
4-Spread Operator
*/

//1-Template Literals
/*
let person = `She name is ${name} and she is ${age} years old.`;
*/

//2-Arrow Functions
/*
const sayHello = (name) => {
    console.log(`Hello, ${name}`);
}
*/

//3-Destructuring
/*
const obj = { name: "John", age: 30 };
const { name, age } = obj;
console.log(name); // "John"
console.log(age); // 30
*/

//4-Spread Operator
/*
const obj = {name: "John", age: 30, job: "Developer"};
const {name, age} = obj;
const newObj = {name, age, location: "New York"};
console.log(newObj); // { name: "John", age: 30, location: "New York" }
*/

//Array Functions, Destructuring, Template Literals, Spread Operator together in a single function
// Arrow Functions
const introducePerson = (person) => {
    // Destructuring
    const { name, age, job } = person;

    // Template Literals
    const introduction = `Hello, my name is ${name}. I am ${age} years old and work as a ${job}.`;

    // Spread Operator
    const updatedPerson = { ...person, hobby: "Computer Games" };

    console.log(introduction);
    console.log("Updated Person Object:", updatedPerson);

    return updatedPerson;
};

const person = { name: "Berra", age: 22, job: "Developer" };
introducePerson(person);  