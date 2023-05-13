//declaring genric types
type GenericArrayType<T> = Array<T>;

const rollNumbers4: number[] = [1, 2, 3];
const names: string[] = ["Protik", "rafiur"];

const rollNumbers4WithAngleBracet: Array<number> = [1, 2, 3];
const namesWithAngleBracet: Array<string> = ["Protik", "rafiur"];

//using by GenericArrayType

const rollNumbers4GenericArrayType: GenericArrayType<number> = [1, 2, 3];
const namesWithGenericArrayType: GenericArrayType<string> = ["Protik", "rafiur"];

type UserDetailsTypes = { name: string, age: number }

// array of objects with angle bracet
const userDetailsWithAngleBracet: GenericArrayType<UserDetailsTypes> = [
    {
        name: 'Protik',
        age: 20
    },
    {
        name: 'Rafiur',
        age: 25
    }
]

// array of objects with angle bracet
const userDetailsWithGeneric: GenericArrayType<{ name: string, age: number }> = [
    {
        name: 'Protik',
        age: 20
    },
    {
        name: 'Rafiur',
        age: 25
    }
]

//generic with multiple arguements

type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ["Protik", "Rafiur"];

//type alias
type GenericTupleType = { name: string, salary: number };

//interface
interface GenericTupleInterface {
    name: string,
    salary: number
}

const person4: GenericTuple<GenericTupleInterface, string> = [
    {
        name : "Protik",
        salary: 25
    },
    "Rafiur Rahman Protik"
]