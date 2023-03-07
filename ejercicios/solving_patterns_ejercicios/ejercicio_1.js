/*Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. 
*/

function validAnagram(str1, str2) {
    if (typeof str1 != "string" || typeof str2 != "string") return false;
    if (str1.length != str2.length) return false;
    [str1, str2] = [str1.toLocaleLowerCase(), str2.toLocaleLowerCase()]
    let frequencyStr1 = {}
    let frequencyStr2 = {}
    for (let char of str1) {
        frequencyStr1[char] = (frequencyStr1[char] || 0) + 1
    }
    for (let char of str2) {
        frequencyStr2[char] = (frequencyStr2[char] || 0) + 1
    }
    for (let char in frequencyStr1) {
        if (frequencyStr1[char] != frequencyStr2[char]) {
            return false
        }
    }
    return true

}

function validAnagram1(first, second){
    if(first.length !== second.length)return false //si los arreglos tienen longitudes distintas, envía a falso

    const lookup = {} //genera un objeto en donde va a guardar el número de veces de cada letra en la primera palabra

    for (let i= 0; i<first.length; i++){
        let letter = first[i] //para la primera palabra
        lookup[letter] ? lookup[letter] +=  1 :lookup[letter] =1 //si la letra existe, incremente a la llave, de otra manera lo deja en 1
    }
    for (let i=0; i<second.length;i++){
        let letter = second[i] 
        if(!lookup[letter]){ //revisa si NO está en las letras del primero
            return false
        }else{
            lookup[letter]-=1 //si encuentra la letra, lo reduce en el objeto hasata volverse cero
        }
    }
    return true
}


console.log(validAnagram('', ''))
console.log(validAnagram('aaz', 'zza') )
console.log(validAnagram('anagram', 'nagaram')) 
console.log(validAnagram("rat","car")) 
console.log(validAnagram('awesome', 'awesom')) 
console.log(validAnagram('qwerty', 'qeywrt') )
console.log(validAnagram('texttwisttime', 'timetwisttext'))
