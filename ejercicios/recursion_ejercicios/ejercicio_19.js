/*capitalizeFirst

Write a recursive function called capitalizeFirst.
Given an array of strings, capitalize the first letter of each string in the array. 
*/

  function capitalizeFirst (array) {
    if (array.length === 1) { //si el arreglo es de solo una letra lo pasa a mayúscula
      return [array[0][0].toUpperCase() + array[0].substr(1)]; //convierte la primera en mayúscula
    }
    const res = capitalizeFirst(array.slice(0, -1));//corta las letras menos el último
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);//aplica al siguiente elemento del arreglo, la primera parte para la mayúscula y la segunda parte es el resto de la palabra
    res.push(string);//junta los elementos del arreglo
    return res;
  }
//second solve

const capitalizeWord = word => word[0].toUpperCase() + word.slice(1);


function capitalizeFirst(arr) {
  return arr.length ? [ capitalizeWord(arr[0]), ...capitalizeFirst(arr.slice(1))] : [];
}

console.log(capitalizeFirst(["try","catch"]))
let array1 = ["combining","words"]
console.log(array1[0][0].toUpperCase() + array1[0].substr(1))
console.log(array1.slice(0, -1))
console.log(array1.slice(array1.length - 1)[0][0].toUpperCase())  
console.log(array1.slice(array1.length-1)[0].substr(1))
const res1 = capitalizeFirst(array1.slice(0, -1))
const string1 = array1.slice(array1.length - 1)[0][0].toUpperCase() + array1.slice(array1.length-1)[0].substr(1);//aplica al siguiente elemento del arreglo, la primera parte para la mayúscula y la segunda parte es el resto de la palabra
console.log(res1.push(string1))
