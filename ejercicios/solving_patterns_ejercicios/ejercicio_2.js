/*Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted. (multiple pointers)
*/


function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    let j = 1;
    while (j < arr.length){
        if (arr[i] !== arr[j]){
            arr[++i] = arr[j]
        } 
        j ++;
    }
    return i + 1
}

function countUniqueValues1(arr){
    if (arr.length === 0) return 0 //para el caso de que no tenga contenido el arreglo
    var i=0
    for(var j = i; j<arr.length; j++){
        if(arr[i] !== arr[j]){ //compara si la posicio de i y de j son iguales
            i++; //va a la siguiente posición el izquierdo, para ahora comparar izquierdo con derecho
            arr[i] = arr[j] //reasigna el valor al nuevo número diferente
        }
    }
    return i+1 //se queda con el último valor de i, porque i fue guardando únicamente los valores no repetidos durante la búsqueda
}

console.log(countUniqueValues([1,1,1,1,1,2]))
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2,-1,-1,0,1]))