type User = {
    name: string,
    age: number
}

//type alias extending behaviour with intersection
type UserExtended = User & {
    role: string
}

interface IUser {
    name: String,
    age: number
}

const userWithTypeAlias: User = {
    name: "Protik",
    age: 25
}

const userWithInterface: IUser = {
    name: "Protik",
    age: 25
}

//extending userWithInterface
interface IExtendedUser extends IUser {
    role: string
}

const user: IExtendedUser = {
    name: "protik",
    age: 25,
    role: 'Developer'
}


//In js function, array are one kind of object

//type alias
type addNumberTypes = (num1: number, num2: number) => number;

//with interface
interface IAddNumbers {
    (num1: number, num2: number): number
}

//using with type alias
const addNumber : addNumberTypes = (num1, num2) => num1 + num2;

//using with interface
const addNumber2 : IAddNumbers = (num1, num2) => num1 + num2;

// Note: We should use type alias for function because it's more readable

// now array

//type alias
type RollNumbers = number[];

//interface
interface IRollNumbers {
    [index: number]: number;
}
//using type alias
const rollNumbers: RollNumbers = [1, 2, 3, 4];

//using with interface
const rollNumbers2: IRollNumbers = [1, 2, 3, 4];
