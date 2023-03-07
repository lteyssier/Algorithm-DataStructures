//funcion recursiva
//funciones que se llaman así mismas dentro de la misma función para seguir ejecutando iterativamente. Los pasos a identificar son
//Base case, es la condición cuando la recursion termina
//Different input
//Ejemplo contador 
function countDown(num){
    if(num<=0){
        console.log("All done")
        return
    }
    console.log(num);
    num--
    countDown(num)
}

//Ejemplo suma iterativa
function sumRange(num){
    if(num===1) return 1
    return num + sumRange(num-1)
}
//Ejemplo factorial
function factorial(num){
    if(num===1 || num===0)return 1 
    return num * factorial(num-1)
}


 console.log(countDown(5))
 console.log(sumRange(5))
 console.log(factorial(5))

