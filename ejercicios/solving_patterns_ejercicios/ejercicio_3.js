/*Write a function called sameFrequency. 
Given two positive integers, find out if the two numbers have the same frequency of digits.*/

//complexity O(N)
function sameFrequency(num1, num2){
    let strNum1 = num1.toString();//convierte los arreglos en cadena de caracteres, de lo contrario lo tomaría como un número completo
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false; // si son de diferente tamaño, regresa un falso
    
    let countNum1 = {}; //se crea un objeto con la intención de contar cuántas se repite cada número
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1 //genera la llave y el número de veces que se repite esa llave, para el arreglo 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1//análogo para el arreglo 2
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false; //si las llaves y el número de veces que se repite son diferentes, entonces regresa falso
    }
    return true;
  }

console.log(sameFrequency(182,281))
console.log(sameFrequency(34,14))
console.log(sameFrequency(3589578,5879385))
console.log(sameFrequency(22,222))