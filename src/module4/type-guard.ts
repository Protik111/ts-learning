type AlphaNumeric = string | number;

function add(param1: AlphaNumeric, param2: AlphaNumeric) {
    if(typeof param1 == 'number' && typeof param2 == 'number'){
        return param1 + param2;
    } else {
        return param1.toString() + param2.toString();
    }
}

console.log(add('5', '6'));
console.log(add(5, 6));

// in guard

type NoramalUserType = {
    name: string;
}

type AdminUserType = {
    name: string;
    role: 'admin';
}

function getUser(user: NoramalUserType| AdminUserType): string {
    if('role' in user) {
        return `I am an admin and my role is: ${user.role}`
    } else {
        return 'I am a normal user.'
    }
}

const normalUser1: NoramalUserType = { name: "Protik" }
const adminUser1: AdminUserType = { name: "Protik", role: 'admin' }

console.log(getUser(adminUser1));

// instance of guard for class and object

class Animal{
    name: string;
    species: string

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species
    }

    makeSound() {
        console.log('I am making sound!');
    }
}

class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species)
    }

    makeBark(): void {
        console.log("I'm making bark");
    }
}

class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, species)
    }

    makeMeiw(): void {
        console.log("I'm making mewing");
    }
}

function getAnimal(obj: Animal) {
    if(obj instanceof Dog) {
        obj.makeBark();
    } else if (obj instanceof Cat) {
        obj.makeMeiw();
    } else {
        obj.makeSound();
    }
}

//check bu function
function isDog(obj: Animal): obj is Dog {
    return obj instanceof Animal; 
}

const dog1 = new Dog('German', 'dog')
const cat1 = new Cat('Persian', 'cat')

getAnimal(dog1)