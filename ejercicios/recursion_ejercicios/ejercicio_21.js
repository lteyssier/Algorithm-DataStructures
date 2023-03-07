/*capitalizeWords

Write a recursive function called capitalizeWords. 
Given an array of words, return a new array containing each word capitalized.
*/

function capitalizeWords (array) {
    if (array.length === 1) { //si el arreglo de de una solo letra solo convertirla en mayúscula
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));//aplica la función y elimina el último caracter
    res.push(array.slice(array.length-1)[0].toUpperCase());//convierte la última letra en mayúscula
    return res; //acumula el arreglo ordenándolo de manera lineal de nuevo(de atrás hacia delante)
  }
