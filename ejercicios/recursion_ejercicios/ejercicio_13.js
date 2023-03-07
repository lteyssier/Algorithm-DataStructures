/* Recursive Range
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 
*/

function recursiveRange(x){
    if (x === 0 ) return 0; //si el arreglo no tiene valores, retorna 1
    return x + recursiveRange(x-1); // genera la suma recursiva
 }

 console.log(recursiveRange(10))
 console.log(recursiveRange(20))