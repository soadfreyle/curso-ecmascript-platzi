//declaracion de una clase

class User {

};

//instacia de una clase
const newUser = new User();


//nueva clase---------------------
class user {
    //metodos
    greeting() {
        return 'Hello';
    }
}
//instancia y llamo al metodo
const gndx = new user();
console.log(gndx.greeting());

const bebeloper = new user();
console.log(bebeloper.greeting());

//constructor inicializar elementos de la clase
// cuando creer una instacia va ejecutar inicializar 
//los elementos del constructor

class user {
    //constructor
    constructor() {
        console.log('Nuevo Usuario');
    }
    //metodos
    greeting() {
        return 'Hello';
    }
}
//cuando instancio llamo alconstructor q inicializa 
//los elementos.
const davis = new user();

//referencia this
//hace referencia del elemento padre que lo contiene
class user {
    constructor(name) {
        this.name = name;
    }

    //metodos
    speak() {
        return 'Hello';
    }
    //
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}
const ana = new user('Ana');
console.log(ana.greeting());

//getter & setter

class user {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak() {
        return 'Hello';
    }

    greeting() {
        return `${this.speak()} soy ${this.name} tengo ${this.age} años`;
    }
//obtengo o leo 
    get uAge() {
        return this.age
    }
// estableco nuevo valor
    set uAge(u) {
        this.age = u;
    }
}

const bebe = new user('David', 15);
console.log(bebe.uAge); //el argumento de la instancia
console.log(bebe.uAge = 25);// el nuevo argumento de la instancia
console.log(bebe);
console.log(bebe.greeting());