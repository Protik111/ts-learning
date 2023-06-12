// Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

type ProductTuple = [
    string,
    number,
    number
]
function findTotalCost(products: ProductTuple[]): number {
    let totalCost = 0;

    products.forEach((_, price, quantity) => {
        totalCost += price + totalCost;
    });

    return totalCost;
}

const productsArr: ProductTuple[] = [
    ['Product 1', 100, 10],
    ['Product 2', 200, 20],
    ['Product 3', 300, 30],
]



console.log(findTotalCost(productsArr));