interface MandatoryInterface {
    lastName: string,
    age: number
}

//myObjectAdd with generic
const myObjectAdd3 = <T extends MandatoryInterface>(myinfo: T) => {
    const fullName = "Rafiur Rahman Protik";
    const newData = { ...myinfo, fullName }
    return newData;
}

type MyInfo2={
    lastName: string,
    age: number
} 

const myInfo2 = {
    lastName: "Protik",
    age: 25
}

const myResult3 = myObjectAdd3(myInfo2);