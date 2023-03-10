/* Factorial
Write a function factorial which accepts a number and returns the factorial of that number. 
A factorial is the product of an integer and all the integers below it; e.g., 
factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.
*/

function factorial(x){
    if (x < 0 ) return 0; //valores menores a 0 van a 0
    if (x <= 1 ) return 1; //valores entre 0 y 1 regresa 1
    return x * factorial(x-1); //multiplica por el anterior y vuelve al ciclo
 }

 console.log(factorial(5))
 console.log(factorial(3))