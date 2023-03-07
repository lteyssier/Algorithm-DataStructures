//Multiple pointers

/*Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. 
Return an array that includes both values that sum to zero or undefined if a pair does not exist*/

//complejidad N^2
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){ 
        for(let j = i+1; j < arr.length; j++){ //recorre el arreglo a partir de la siguiente posicion de donde comienza i
            if(arr[i] + arr[j] === 0){  //identifica si existen las parejas
                return [arr[i], arr[j]]; //regresa la primer pareja que encuentra donde el valor se haga cero
            }
        }
    }
}

//Complejidad O(N)
function sumZero1(arr){
    let left = 0; //la primera posición comienza del lado izquierdo
    let right = arr.length - 1; // el lado derecho comienzo desde la última posición 
    while(left < right){
        let sum = arr[left] + arr[right]; //se hace la operación entre dos posiciones
        if(sum === 0){ // si el resultado de la suma es 0, entonces retorna el primer valor(primer pareja de números) donde se cumple que la suma sea cero
            return [arr[left], arr[right]];
        } else if(sum > 0){ //si la suma es mayor a cero, el lado derecho baja una posición y vuelve a comparar
            right--;
        } else { //si es diferente a los casos anteriores, entes el lado izquiero sube una posición
            left++;
        }
    }
}

console.log(sumZero([-3,-2,-1,0,1,2,3]))
console.log(sumZero([-2,0,1,3]))
console.log(sumZero([1,2,3])) 