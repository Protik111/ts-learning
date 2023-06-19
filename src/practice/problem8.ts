// Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.

type strType = "red" | "green" | "blue";

const showUpperLowerCase = (str: strType, isUppercase?: boolean): void => {
    if (isUppercase) {
        console.log(str.toUpperCase());
    } else {
        console.log(str.toLowerCase());
    }

}

showUpperLowerCase("red", true)
showUpperLowerCase("green") //without boolean