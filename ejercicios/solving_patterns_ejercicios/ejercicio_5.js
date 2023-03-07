/* Write a function called averagePair. 
Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair equals the target average.
There may be more than one pair that matches the average target.*/

//averagePair Solution
function averagePair(arr, num){
    let start = 0   //inicializa la variable en posición 0
    let end = arr.length-1; //asigna variable a la última posición 
    while(start < end){  
      let avg = (arr[start]+arr[end]) / 2 //marca avg como un punto medio 
      if(avg === num) return true; //si el punto medio entre 
      else if(avg < num) start++ //en caso contrario ,inicio aumenta una posición y verifica de nuevo
      else end-- //en caso contrario, el final retrocede posiciones
    }
    return false;
  }

console.log(averagePair([1,2,3],2.5)) 
console.log(averagePair([1,3,3,5,6,7,10,12,19],8) )
console.log(averagePair([-1,0,3,4,5,6], 4.1))
console.log(averagePair([],4))