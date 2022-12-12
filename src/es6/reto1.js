/*
En este deafío recibirás dos objetos JSON por parámetros.

Usando el spread operator, deberás combinar ambos objetos 
en uno solo. Es posible que no se te envíe alguno de los 
dos objetos o ninguno, por lo que deberás usar estos por 
defecto, en su respectivo orden:

JSON1:
{
    name: "Mr. Michi",
    food: "Pescado"
}
Json2:
{
    age: 12,
    color: "Blanco"
}


La solución deberá tener un input y output como la siguiente,
 recuerda que se te pueden o no envíar los parámetros.

input:
solution({
    name: "Bigotes",
    food: "Pollito"
}),


output:
{
    name: "Bigotes",
    food: "Pollito",
    age: 12,
    color: "Blanco"
}
*/
function solution(json1 = {name: "Mr. Michi", color: "Blanco"}, json2 = {age: 12,  color: "Blanco"}) { 
    console.log(json1, json2);
}
solution();//predeterminado
solution({name: 'soad', color: 'rosado'}); // el nuevo obj mas el predeterminado

function solution(json1 = {name: "Mr. Michi", color: "Blanco"}, json2 = {age: 12,  color: "Blanco"}) { 
    let join = {...json1, ...json2};
    console.log(join);
}
solution();// en la union no repite clave color

function solution(json1 = {name: "Mr. Michi",  food: "Pescado"}, json2 = {age: 12,  color: "Blanco"}) { 
    let join = {...json1, ...json2};
    return console.log(join);
}
solution();
solution({name: 'Bigote', food: 'pollito'});

