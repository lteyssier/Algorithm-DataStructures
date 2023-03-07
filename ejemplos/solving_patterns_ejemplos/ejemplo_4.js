//Divide and conquer

/*Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located.
 If the value is not found, return -1 */

// Complejidad O(N)
function search(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}

//Busqueda binaria Log(N)
function search1(array, val) {
 
    let min = 0; //se define la primera posición
    let max = array.length - 1; //se define la última posición del arreglo
 
    while (min <= max) { 
        let middle = Math.floor((min + max) / 2); //se define un punto medio para partir el problema
        let currentElement = array[middle];
 
        if (array[middle] < val) { //busca del lado izquierdo del arreglo 
            min = middle + 1;
        }
        else if (array[middle] > val) { //busca del lado derecho del arreglo
            max = middle - 1;
        }
        else {
            return middle; //busca en el punto medio del arreglo
            
        }
    }
 
    return -1;
}

console.log(search([1,2,3,4,5,6],4))
console.log(search([1,2,3,4,5,6],6)) 
console.log(search([1,2,3,4,5,6],11))