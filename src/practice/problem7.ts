// Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.

const numbers: number[] = [1, 2, 3, 4, 5];

function findMaxMin(...nums: number[]): [number, number] {
    // let max = nums[0];
    // for(const number of nums) {
    //     if(number > max) {
    //         max = number
    //     }
    // }
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return [max, min]
}

console.log('Maximum number is: ', findMaxMin(...numbers));