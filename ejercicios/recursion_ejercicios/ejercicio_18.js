/* Flattened (clean [])
Write a recursive function called flatten which accepts an array of arrays 
and returns a new array with all values flattened.
*/

function flatten(oldArr){
    var newArr = [] 
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){ //si el arreglo es verdadero
                newArr = newArr.concat(flatten(oldArr[i])) // concatenar con los valores que se encuentran dentro de cada arreglo de arreglo
          } else {
                newArr.push(oldArr[i])//Si el valor no es arreglo, solo agregar el valor
          }
    } 
    return newArr;
  }

console.log(flatten([1,4,5,[[[3]],2],1,1]))
