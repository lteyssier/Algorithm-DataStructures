/* some Recursive
Write a recursive function called someRecursive which accepts an array and a callback. 
The function returns true if a single value in the array returns true when passed to the callback. 
Otherwise it returns false.
*/
const isOdd = val => val % 2 !==0; //define una función externa
function someRecursive(array, callback) {

    if (array.length === 0) return false; //si el arreglo no cuenta con nada, entonces falso porque no regresa nada
    if (callback(array[0])) return true; //si el arreglo se aplica en la primera posición la condición de la función, entonces cumple
    return someRecursive(array.slice(1),callback); //aplica la función recursiva y pruena con la siguiente posición. Con que cumpla uno pasa
}

console.log(someRecursive([1,3,4,5],isOdd))
