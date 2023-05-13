const createArr = (param: string): string[] => {
    return [param]
}

//with angle bracet
const createArr2 = <T> (param: T): T[] => {
    return[param]
}

//createArray with tuple
const createArrayWithTuple = <T, U> (param1: T, param2: U): [T, U] => {
    return [param1, param2]
} 

const res1 = createArr2<string>('Bangladesh')
const res2 = createArr2<boolean>(true)

type Name = {name: string}

const res3 = createArr2<Name>({ name: "Protik" })

const res4 = createArrayWithTuple<boolean, Array<string>>(false, ["Protik"])

const myObjectAdd = (myinfo: object) => {
    const fullName = "Rafiur Rahman Protik";
    const newData = { ...myinfo, fullName }
    return newData;
}

//myObjectAdd with generic
const myObjectAdd2 = <T>(myinfo: T) => {
    const fullName = "Rafiur Rahman Protik";
    const newData = { ...myinfo, fullName }
    return newData;
}

const myInfo = {
    lastName: "Protik",
    age: 25
}

const myResult = myObjectAdd2(myInfo);