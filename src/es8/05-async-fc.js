//vamos hacer una promesa
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        //aca valido con un ternario
        (true)
        ?
        setTimeout(() => resolve('AsyncC!!'), 2000)
        : reject(new Error('Error!'));

    })
}

//sintaxis Async Await
//identifica esta funcion con este nuevo concepto
//AnotherFn es un promesa

const AnotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello')
}

//ver el flujo
console.log('Before');
AnotherFn();// no va a bloquear el codigo
console.log('After');