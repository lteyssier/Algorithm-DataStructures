//Insertion Sort
/* Buidls up the sort by gradually creating a larger left half which is always sorted
Start by picking the second element in the array
Now compare the second element with the one before it and swap if necessary
Continue to the next element and if it is the incorrect order, iterate through the sorted portion(i.e
the left side) to place the element in the correct place
Repeat until the array is sorted
*/

function insertioSort(arr){
    for(var i=1; i<arr.length;i++){ 
        var currentVal = arr[i] //se define la variable de valor actual a la posición del arreglo 
        for(var j= i-1; j>=0 && arr[j]>currentVal; j--){//por otro lado el segundo valor comienza desde la siguiente posición, siempre y cuando sea mayor al valor actual
          console.log(currentVal, i,j)
            arr[j+1]=arr[j] //el arreglo siquiente entre la posición actual para comparar
            console.log(arr)
        }
        arr[j+1] = currentVal //el valor siguiente se convierte en el valor actual 
    }
    return arr
}

console.log(insertioSort([2,14,4,12,1]))