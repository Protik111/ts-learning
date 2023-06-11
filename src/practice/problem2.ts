// Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

// 1) For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because they are present in both arrays.

// 2) The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.



const findCommonEle = (arr1: number[], arr2: number[]): number[] => {
    const newArr2: number[] = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j <= arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                // console.log(j)
                newArr2.push(arr1[i])
            }
        }
    }
    return newArr2
}

console.log(findCommonEle([1, 2, 4, 5], [1, 2, 3, 4, 5]))