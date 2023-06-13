// Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?

const findResult = (arr1: number[]): number => {
    let result = 0;
    arr1.forEach(num => {
        if(num % 2 === 0) {
            result += num;
        }
    })

    return result;
}

console.log(findResult([1, 2, 3, 4, 5, 6]));