function* getId() {
    while (true) {
    yield Math.random().toString(36).substring(5).toUpperCase();
    }
}

const id = getId()
console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)


function* getId() {
    let lastId = 1;
    while (true) {
    yield lastId++;
    }
}

const id2= getId()
console.log(id2.next().value)
console.log(id2.next().value)
console.log(id2.next().value)