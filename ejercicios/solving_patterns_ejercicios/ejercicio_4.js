/*Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern. */

//Nota. Arguments es un obejto tipo arreglo aaccesible dentro de una función que contiene valores de los argumentos pasados de la función, solo es válida para funciones no flecha
//Frequency counters
function areThereDuplicates() {
    let collection = {} //crea un objeto vacío donde acumula llaves 
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1 //Asigna una llave para contar el número de veces(valor) que se repite cada elemento(porpiedad)
    }
    for(let key in collection){
      if(collection[key] > 1) return true //si alguna de las llaves del objeto tiene más de un elemento ya cuenta con duplicados
    }
    return false;
  }

  //Multiple pointers
  function areThereDuplicates2(...args) { //crea una copia de los argumentos 
    // Two pointers
    args.sort((a,b) => a > b); //ordena los elementos del arreglo
    let start = 0; //define posición de inicio
    let next = 1; //define posición siguiente a comparar
    while(next < args.length){
      if(args[start] === args[next]){ //si el elemento de inicio se repite con final si cumple con duplicados
          return true
      }
      start++  //de lo contrario aumenta una posición inicio y siguiente para comparar
      next++
    }
    return false
  }

  //One liner solution
  //Set constructor permite crrar con valores únicos de cualquier tipo, tanto valores primitivos como referencias de objetos
  function areThereDuplicates3() {
    return new Set(arguments).size !== arguments.length; // si el listado de valores únicos es diferente al conjunto de argumentos inicial, entonces cumple que tiene duplicados
  }

console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates('a', 'b', 'c','a'))