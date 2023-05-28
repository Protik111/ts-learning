//normal function

function add5(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(add(10, 20));

const addArrow = (num1: number, num2: number): number => num1 + num2;

console.log(addArrow(50, 50));

const arr = [1, 2, 3, 4];

const newArr = arr.map((ele: number) => ele * ele);

console.log(newArr);


const person : {
    name: string,
    age: number,
    salary: number,
    addSalary(money: number): number //last part is return type
} = {
    name: 'Protik',
    age: 25,
    salary: 20,
    addSalary(money: number) {
        return this.salary + money
    }
}

console.log(person.name);
console.log(person.salary);
console.log("After increasing salary is :", person.addSalary(5));