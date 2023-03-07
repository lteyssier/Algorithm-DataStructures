/*stringifyNumbers
Write a function called stringifyNumbers which takes in an object and finds 
all of the values which are numbers and converts them to strings. 
Recursion would be a great way to solve this!
*/

function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
      if (typeof obj[key] === 'number') { //Si el tipo de objeto es igual a un número 
        newObj[key] = obj[key].toString(); //convierte el número a string
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) { //si es otro objeto y algo diferente a un arreglo
        newObj[key] = stringifyNumbers(obj[key]); //sigue buscando dentro del objeto para encontrar números
      } else {
        newObj[key] = obj[key];//sustituye los números por strings como un nuevo objeto
      }
    }
    return newObj;
  }

  let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj))