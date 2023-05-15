type PersonType2 = {
    name: string,
    age: number,
    gender: string
}

type newType = 'name' | 'age' | 'gender';

const a: newType = 'age';

//same behaviour with keyof
type NewTypeUsingKeyOf = keyof PersonType2;

const b: NewTypeUsingKeyOf = 'age'

//with function
// Y extends keyof X means you get the key of X that means name and age key from the object. we are ensuring that we pass age as second arguement and it contains in the first arguement object
// Y means 'name' | 'age' 
function getProperty<X, Y extends keyof X>(obj: X, key:Y) {
    obj[key]
}

const propertyVal = getProperty({ name: "Protik", age: 9 }, "age")