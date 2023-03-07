 //Helper method recursion
 /* 
 function outer(input){   
    var outerScopedVariable = [] //el arreglo se llena a través de de la funcion iterativa de helper

    function helper(helperInput){ //funcion recursiva
        //modify the outerScopedVariable
        helper(helperInput--)
    }
    helper(input)
    return outerScopedVariable 
 }
 */

 //Collect all odd values in an array 
 function collectOddValues(arr){
    let result = [] 

    function helper(helperInput){
        if(helperInput.length === 0){ //si cumple que ya no tiene elementos termina la función recursiva
            return;
        }
        if (helperInput[0] % 2 !== 0){ //si cumple la condición de ser impar, lo agrega a la variable result
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1)) //se vuelve a generear la recursión pero ahora quitando el primer elemento
    }
    helper(arr) //invoca la función
    return result //retorna el resultado final
 }