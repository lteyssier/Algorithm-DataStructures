//Bubble Sort
/* A sorting algorithm where the largest values bubble up to the top 
checking one by one and comparing elements
*/

/* Swap
Many sorting algorithms involve some type of swapping functionality(e.g. swapping to numbers to put the in order)
ES%
function swap(arr, idx1,idx2){
    var temp = arr[idx1]
    arr[idx1]=arr[idx2]
    arr[idx2]=temp
}
ES2015
const swap = (arr,idx1,idx2) =>{
    [arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]]
}
*/

/*bubble sort consist
Start looping from with a variable called i the enf of array towards the beginning
Start an inner loop with a variable called j from the beginning until i-1
if arr[j] is greater than arr[j+1], swap those two values
returned sorted array
*/

//Normal code
function bubbleSort(arr){
    for(var i=arr.length; i>0; i--){ // for(var i=0; i<arr.length; i++){
        for(var j=0;j<i-1; j++){ // for(var j=0;j<arr.length; j++){
            if(arr[j]>arr[j+1]){
                //SWAP
                var temp = arr[j];
                arr[j]= arr[j+1];
                arr[j+1]=temp
            }
        }
    }
    return arr
}

//Optimization code
function bubbleSort(arr){
    var noSwaps;
    for(var i=arr.length; i>0; i--){ 
        noSwaps = true //inicia como verdadero
        for(var j=0;j<i-1; j++){ 
            if(arr[j]>arr[j+1]){ //si se cumple la condición entonces noSwaps cambia a falso
                //SWAP
                var temp = arr[j];
                arr[j]= arr[j+1];
                arr[j+1]=temp
                noSwaps=false 
            }
        }
        if(noSwaps) break // en caso de que el if no ejecute vuelve queda en true y rompe el ciclo
    }
    return arr
}

console.log(bubbleSort([3,56,4,76,1,6,10,4]))

//Nota, el mejor desempeño se da cuando los valores están casi ordenados 
