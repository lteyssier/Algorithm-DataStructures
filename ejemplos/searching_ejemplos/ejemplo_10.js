//Naive String Search
/*counting numbers of times a smaller string appears in a longer string
a straightforward approach involves checking pairs of characters individually
Loop over the longer string
next, loop over the shorter 
if the characters don't match, break out of the inner loop
If you complete the inner loop and find a match, incremente the count of matches
return the count
*/

function naiveSearch(long, short){
    var count = 0
    for(var i = 0; i<long.length;i++){
        for(var j = 0; j <short.length;j++){
            if(short[j] !== long[i+j]){ //revisa par a par las coincidencias, si encuentra uno entonces corta y reinicia en la siguiente posición
                break
            }
            if(j=== short.length-1){ //si encuentra las coincidencias entonces lleva el contador a uno
                count++
            }
        }
    }
    return count
}

console.log(naiveSearch("loreie loled","lol"))