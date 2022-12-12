const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2022-01-01');
console.table(matchers);


//---------------------------------------------
const user = {username: 'gndx', age: 34, country: 'CD'};
const { username, ...values } = user;
console.log(username);
console.log(values);

//----------------------------------

/*
Cuidado con la copia en diferentes niveles de profundidad
El operador de propagación sirve para crear una copia en 
un solo nivel de profundidad, esto quiere decir que si 
existen objetos o arrays dentro de un objeto a copiar. 
Entonces los sub-elementos en cada nivel, tendrán la misma 
referencia en la copia y en el original.



*/
const original = { datos: [1, [2, 3], 4, 5] }
const copia = { ...original }

original === copia // false
original["datos"] === copia["datos"] // true
console.log(original);
console.table(original);
console.log(copia)

/*
La manera de solucionar esto es más compleja, 
tendrías que utilizar el operador de propagación 
para cada elemento en cada nivel de profundidad.

Sin embargo, recientemente salió una forma de 
crear una copia profunda con StructuredClone.
 Aunque es una característica muy reciente, así 
 que revisa que navegadores tienen soporte.



*/

const original1 = { datos: [1, [2, 3], 4, 5] }
const copia1 = structuredClone(original1)

original1 === copia1 // false
original1["datos"] === copia1["datos"] // false
console.log(original1);
console.table(original1);
console.log(copia1)
//---------------------------------------

const objeto = {
    nombre: "Andres",
    age: 23,
}

const usuario = {
    ...objeto,
    plataforma: "Platzi"
}
console.log(usuario)

//------------------------------------
const objetoOriginal = {a: 1, b: 2}
const objetoReferencia = objetoOriginal
const objetoCopia = {...objetoOriginal}

console.log(objetoReferencia === objetoOriginal)//true
console.log(objetoOriginal === objetoCopia)//false

/*
Cuidado con la copia en diferentes niveles de profundidad
El operador de propagación sirve para crear una copia 
en un solo nivel de profundidad, esto quiere decir que 
si existen objetos o arrays dentro de un objeto a copiar. 
Entonces los sub-elementos en cada nivel, tendrán la misma 
referencia en la copia y en el original.
*/

const original55 = { datos: [1, [2, 3], 4, 5] }
const copia55 = { ...original55 }

console.log(original55 === copia55) // false
console.log(original55["datos"] === copia55["datos"]) // true
console.log(original55)
console.log(original55 ["datos"])
console.log(copia55["datos"])
//-------------------
const origina = { datos: [1, [2, 3], 4, 5] }
const copi = structuredClone(origina)

console.log(origina === copi) // false
console.log(origina["datos"] === copi["datos"]) // false

//---------------------
