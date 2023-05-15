let nothing: any;

nothing = "Learning type assertion";

(nothing as string).length;

//another way with angle bracet
<string> nothing.length;

function kgToGram(param: string | number): string | number | undefined {
    if(typeof param === 'string') {
        const value = parseFloat(param)*1000;
        return  `The converted result is: ${value}`
    }
    if(typeof param === 'number') {
        const value = param * 1000;
        return value;
    } 
}

const resultToBe = kgToGram(10 as number)
const resultToBe2 = kgToGram('Hello' as string)

//we can write in a different syntax

const resultToBeWithAngel = <number>kgToGram(10)
const resultToBe2WithAngel = <string>kgToGram('Hello')


type CustomErrorType = {
    message: string
}

try {
    
} catch (error) {
    console.log((error as CustomErrorType).message);
}