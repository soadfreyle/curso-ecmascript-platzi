class user {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    #speak() {
        return 'Hello';
    }

    greeting() {
        return `${this.speak()} soy ${this.name} tengo ${this.age} años`;
    }
//obtengo o leo 
    get #uAge() {
        return this.age
    }
// estableco nuevo valor
    set #uAge(u) {
        this.age = u;
    }
}

const bebe = new user('David', 15);
console.log(bebe.uAge); //el argumento de la instancia
console.log(bebe.uAge = 25);// el nuevo argumento de la instancia
console.log(bebe);
console.log(bebe.greeting());