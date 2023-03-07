//Merge sort


//Merging Arrays
/* In order to implement merge sort, it's useful to first implement
a function responsible for merging two sorted arrays
Given two arrays which are sorted, this helper functino should create a new array whis is also sorted,
and consists of all the elements in the two input arrays
This function should run in O(n+m) time and O(n+m) space and should not modify the 
parameters passed to it 

Consists
Create an empty array, take a lool at the smallest values in each input array
While there are still values we haven´t looked at...
    -If the value in the firs array is smaller than the value in the second array, push the value
     in the first array into our results and move on the next value in the first array
    -If the value in the first array is larger than value in the second array, push the value
     in the second array into our results and move on to the next value in the second array
    -Once we exhaust one array, push in all remaining values from the other array
*/ 

function merge(arr1,arr2){
    let results = [] //comienza con un arreglo vacío
    let i =0 //para el arreglo  1
    let j=0 //para el arreglo 2
    while(i<arr1.length && j<arr2.length){ 
        if(arr2[j]>arr1[i]){
            results.push(arr1[i])
            i++
        }else{
            results.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length){
        results.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        results.push(arr1[j])
        j++
    }
    return results
}

//Merge sort

/*It's a combination of two things - merging and sorting
Exploits the fact that arrays of 0 or 1 elements are always sorted
Works by decomposing an array into smaller arrays of 0 or 1 elements, 
then building up a newly sorted array
*/

/*consists
Break up the array into halves until you have arrays that are empty or have one element
Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you
are back at the full length of the array
Once the array has been merged back together, return the merged(and sorted) array 
*/

function mergeSort(arr){
    if(arr.length <=1)return arr //para el caso de un elemento
    let mid = Math.floor(arr.length/2) //se crea un punto medio para parter en varios arreglos
    let left = mergeSort(arr.slice(0,mid)) //para el lado izquierdo
    let right = mergeSort(arr.slice(mid)) //lado derecho
    return merge(left, right) //aplica al algoritmo de orden
}

