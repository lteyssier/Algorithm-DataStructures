/* Power
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
*/

function power(base, exponent){
    if(exponent === 0) return 1; //cuando el exponente es igual a cero, se va 1
    return base * power(base,exponent-1); //multiplica la base el número de veces que lo determine el exponente
}

console.log(power(3,4))
console.log(power(4,2))
