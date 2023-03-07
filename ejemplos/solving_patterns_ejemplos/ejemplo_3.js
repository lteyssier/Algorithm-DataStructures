//Sliding window

/* Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array.*/

//Complejidad N^2
function maxSubarraySum(arr, num) {
    if ( num > arr.length){ //si hay menos elementos, automáticamente genera un null 
      return null;
    }
    var max = -Infinity; //comenzar desde el negativo más grande para asegurar sumas de negativos
    for (let i = 0; i < arr.length - num + 1; i ++){ //se recorre el arreglo hasta la posición -num+1 con la intención de que en esa posición aún pueda comparar los últimos 
      temp = 0; // se genera una variable temporal que cambia y puede poder comparar con el máximo
      for (let j = 0; j < num; j++){ //de esta forma se recorre uno a uno para comparar num de posiciones
        temp += arr[i + j];
      }
      if (temp > max) { // en caso de que el resultado de la variable supere el valor máximo anteriormente registrado, se asigno como nuevo máximo
        max = temp;
      }
    }
    return max;
  }

  //complejidad O(N)
  function maxSubarraySum1(arr, num){ 
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) { //realiza la primera suma del arreglo y el número de dígitos específicos
      maxSum += arr[i];
    }
    tempSum = maxSum; //se asigna como el máximo de la primera suma para después actualizarlo
    for (let i = num; i < arr.length; i++) { 
      tempSum = tempSum - arr[i - num] + arr[i]; //cada que se recorra el arreglo una posición(+1 posición), se eliminará la anterior del bloque de n números
      maxSum = Math.max(maxSum, tempSum); //se evalua el nuevo bloque, y se asigna el máximo anterior con el nuevo
    }
    return maxSum;
  }

console.log(maxSubarraySum([1,2,5,2,8,1,5],2) )
console.log(maxSubarraySum([1,2,5,2,8,1,5],4) )
console.log(maxSubarraySum([4,2,1,6],1) )
console.log(maxSubarraySum([4,2,1,6,2],4))
console.log(maxSubarraySum([],4)) 