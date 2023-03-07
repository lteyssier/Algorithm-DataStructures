/* Palindrome
Write a recursive function called isPalindrome which returns true if 
the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
*/

function isPalindrome(str){
    if(str.length === 1) return true; //para una letra si cumple
    if(str.length === 2) return str[0] === str[1]; //solo compara dos letras si son iguales
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1)) //verificar si la primera y última posición son iguales, después vuelve al ciclo quitando la primero y última posición 
    return false;
}

console.log(isPalindrome("anitalavalatina"))
console.log(isPalindrome("turtuoso"))

