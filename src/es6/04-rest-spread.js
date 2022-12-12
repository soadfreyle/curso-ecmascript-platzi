// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);
console.log(fruits[1]);

//Object destructuring

let user = { username: 'Oscar', age: 34};
let { username, age } = user;
console.log(username, user.age);

//spread operador

let person = { name: 'Oscar', age: 28};
let contry = 'MX';

let data = { id: 1, ...person, contry};
console.log(data);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num);
    return console.log(num + values[0]);
}
sum(5, 1, 2, 3);