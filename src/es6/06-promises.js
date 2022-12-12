/*
promesa es una forma de trabajar el 
asincronismo.
en Js se hace con CALLBACK, PROMISES, 
ASYNC/AWAIT

las promesa resolvia como trabajar con los
callback q es una funcion q recibe como parametro
otra funcion

promesa es algo q va a pasar, hoy , mañana
nunca


*/
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!!!');
        } else {
            reject('Whoooops!!');
        }
    })
}

//nuevas palabras reservadas q sean agregado
anotherFunction()
    .then(response => console.log(response)) // cuando entre en el resolve 
    .catch(err => console.log(err));