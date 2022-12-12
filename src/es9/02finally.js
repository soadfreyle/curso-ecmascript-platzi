const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("Hey");
        } else {
            reject("Whooops!");
        }
    })
}

anotherFunction()
    .then(response => console.log('Then...' + response))
    .catch(err => console.log('catch...' + err))
    .finally(()=> console.log('Finally'));