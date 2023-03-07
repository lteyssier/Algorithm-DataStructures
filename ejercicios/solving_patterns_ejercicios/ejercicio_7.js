/* Given an array of integers and a number, 
write a function called maxSubarraySum,
which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. 
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
*/

function maxSubarraySum(arr, num){
    if (arr.length < num) return null; // si la longitud del arreglo es menor a la de el valor
 
    let total = 0; 
    for (let i=0; i<num; i++){ //define la primera suma de los elementos num del arreglo arr
       total += arr[i];
    }
    let currentTotal = total; //asigna total como el actual max
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num]; //quita el elemento anterior y agrega el siguiente de la lista 
       total = Math.max(total, currentTotal); //compara con actual máximo para saber si lo cambia o no
    }
    return total;
}

console.log(maxSubarraySum([100,200,300,400], 2))
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) 
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) )
console.log(maxSubarraySum([2,3], 3))