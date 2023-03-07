//Frequency counter pattern

/*write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value squared in the second array.
The frequency of values must be the same.*/

//complexity N^2
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){ //para un arreglo que sea menor a la longitud y que aumente uno por uno
        let correctIndex = arr2.indexOf(arr1[i] ** 2) //indexof retorna el índice en el que se encontrar un elemento dado en el array, o retorna -1 si es falso, para este ejercicio revisa si es el cuadro
        if(correctIndex === -1) { 
            return false;
        }
        arr2.splice(correctIndex,1) //splice modifica quitando o agregando elementos nuevos, en este caso elimina el elemento que encuentra 
    }
    return true
}

//complexity O(n)
function same1(arr1, arr2){
    if(arr1.length !== arr2.length){ 
        return false;
    }
    let frequencyCounter1 = {} //un objeto que cuenta de manera individual los valores en el arreglo
    let frequencyCounter2 = {} //
    for(let val of arr1){  //ejecuta la declaración de un ciclo en una secuencia de valores de un objeto iterable
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1 // ||0 para cualquier valor que no cumple retorna un 0, en lugar de un undefined,etc. De esta forma se guardará el número de veces que aparece un número del arreglo, generando un llave 
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    for(let key in frequencyCounter1){ //se usa la llave para comparar el número de veces que se encuentra cada valor del arreglo
        if(!(key ** 2 in frequencyCounter2)){ //aquí primero revisa si la llave está y su cuadrado también
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){ //aquí revisa que ambas cantidades (de la llave y su cuadrado) sean iguales
            return false
        }
    }
    return true
}


console.log(same([1,2,3], [4,1,9]))
console.log(same([1,2,3], [1,9])) 
console.log(same([1,2,1], [4,4,1]))