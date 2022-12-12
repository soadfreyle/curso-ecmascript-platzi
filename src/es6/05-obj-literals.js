//enahced object literals

//representacion de la asignacion
//func q retorna un obj
//asigarna valores a obj

function newUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country,
    }
}

//cuando lo q retorno tiene el mismo valor!
//omito el valor
function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId,
    }
}
console.log(newUser("soad",35,"CO",55));

