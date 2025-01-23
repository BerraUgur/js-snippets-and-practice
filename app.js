// //Template Literals (şablon dizgiler)
// let namee = `Berra`

// //Arrow Functions (ok fonksiyonları)
// const sayHello = (name) => {
//     console.log(`Hello, ${name}`);
// }

// //Destructuring (parçalama ataması)
// const obj = { name: "John", age: 30 };
// const { name, age } = obj;
// console.log(name); // "John"
// console.log(age); // 30

// //Spread Operator (yayılma operatörü)
// const obj = {name: "John", age: 30, job: "Developer"};
// const {name, age} = obj;
// const newObj = {name, age, location: "New York"};
// console.log(newObj); // { name: "John", age: 30, location: "New York" }
// //----------------------------------------------------------------------

//Arrow Functions (ok fonksiyonları)
const introducePerson = (person) => {
    // Destructuring (parçalama ataması)
    const { name, age, job } = person;

    // Template Literals (şablon dizgiler)
    const introduction = `Hello, my name is ${name}. I am ${age} years old and work as a ${job}.`;

    // Spread Operator (yayılma operatörü)
    const updatedPerson = { ...person, hobby: "Computer Games" };

    console.log(introduction);
    console.log("Updated Person Object:", updatedPerson);

    return updatedPerson;
};

const person = { name: "Berra", age: 22, job: "Developer" };
introducePerson(person);
