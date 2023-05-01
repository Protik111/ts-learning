//to run the code in terminal
// npx ts-node-dev -respawn .\src\alias.ts

type PersonType = {
    name: string,
    age?: number,
    address: string
}

const person1: PersonType = {
    name: "Protik",
    age: 20,
    address: 'Dhaka'
}

const person2: PersonType = {
    name: "Rafiur",
    address: 'Khulna'
}

//for string
type CourseType = string;
const course: CourseType = "Dev";

type OperationType = (x: number, y: number) => number;

const calculate = (
    num1: number, //10
    num2: number, //20
    operation: OperationType //(x, y) => (x + y) 
) => {
    return operation(num1, num2);
}

console.log(calculate(10, 50, (x, y) => x + y));