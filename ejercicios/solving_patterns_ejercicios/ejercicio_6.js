/*Write a function called isSubsequence which takes in two strings and checks whether the characters
in the first string form a subsequence of the characters in the second string. 
In other words, the function should check whether the characters in the first 
string appear somewhere in the second string, without their order changing.*/

//isSubsequence Solution-iterative
function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true; //si no es una cadena regresa  verdadero porque cualquier elemento cumple
    while (j < str2.length) { // mientras se menor a la longitud de la segunda palabra
      if (str2[j] === str1[i]) i++; //se el elemento del lado derecho está en el lado izquierdo 
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }

//isSubsequence Solution- Recursive but no O(1)
//Slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). 
//El array original no se modificará.
function isSubsequence(str1, str2) {
    if(str1.length === 0) return true //si no tiene contenido cumple
    if(str2.length === 0) return false //si no tiene contenido no cumple
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))//si las posiciones coinciden, entonces las elimina para voler a iniciar el ciclo de comparación 
    return isSubsequence(str1, str2.slice(1))//caso contrario a los anteriores, solo elimina un lado y continua de nuevo el ciclo
  }

console.log(  isSubsequence('hello', 'hello world'))// true
  console.log(isSubsequence('sing', 'sting')) // true
  console.log(isSubsequence('abc', 'abracadabra')) // true
  console.log(isSubsequence('abc', 'acb')) // false (order matters)
