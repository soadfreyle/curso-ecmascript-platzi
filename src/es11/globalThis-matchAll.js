//dif forma de acceder al obj global

console.log(window);//del lado del navegador
console.log(global);// del lado de node
console.log(selft); // webworker
console.log(globalThis);

const regex = /\b(Apple)+\b/g;
const fruit = 'Apple, Banana Kiwi, Apple, orange, etc. etc.';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}