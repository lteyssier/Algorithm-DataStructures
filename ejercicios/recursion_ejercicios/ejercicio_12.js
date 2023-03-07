/* Product Array
Write a function called productOfArray which takes in an array of numbers and returns the product of them all. 
*/

function productOfArray(arr) {
    if(arr.length === 0) { //si el arreglo no tiene valores, devuelve 1
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1)); //al igual que la función suma, multiplica todos los arreglos nuevos que genera
}

console.log(productOfArray([2,3,4,5]))
console.log(productOfArray([1,2,3,4,5,6]))