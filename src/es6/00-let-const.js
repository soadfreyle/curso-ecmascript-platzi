var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);

//bloque dentro de una funcion

const fruits = () => {
    //creo un bloque
    if (true) {
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'Kiwi'; //block scope
        const fruit3 = 'Banana'; //block scope
        console.log(fruit2);
        console.log(fruit3);
    }
    //llamar variables fuera del bloque
    console.log(fruit1);

}
// llamamos o ejecutamos la funcion
fruits();
//no ejecuta la variable 2 porque no 
//puede acceder a ese valo esta global

//let y const:
//solo pueden ser accedidas en el bloque
// de codigo donde son declaradas
