class Person {
    // public name: string;
    // public age: number;
    // public occupation: string

    constructor(public name: string, public age: number, public occupation: string) {
        // this.name = name;
        // this.age = age;
        // this.occupation = occupation;
    }

    sayHello(){
        console.log(`${this.name} is saying hello`);
    }
}

const personInstance = new Person("Protik", 5, 'Developer')
personInstance.sayHello();