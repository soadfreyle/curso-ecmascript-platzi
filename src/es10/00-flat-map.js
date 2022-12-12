//nos devuelve una matris de cualquier sub-matris
const array = [1, 1, 2, 3, 4, [1, 3, 5, 6 , [1, 2, 4]]];
console.log(array.flat(3));

// flatmap , mapea c/u de los elemento de una funcion de mapeo

const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(v => [v, v * 2]));

