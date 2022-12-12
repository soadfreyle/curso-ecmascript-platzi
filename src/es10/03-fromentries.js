//obj.entries concierte un obj en un array de array 
// cambio de array a obj

const entries = new Map([["name", " oscar"], ["age", 34]]);
console.log(Object.fromEntries(entries));
console.log(entries);