//Linear search solution



  function linearSearch(arr,val){
    for(var i =0;i<arr.length; i++){ 
        if(arr[i]===val){ //recorre el arreglo hasta en contrar el valor
            return i  //si encuentra el valor, entonces regresa la posición i(index)
        }
    }
    return -1 //caso contrario regresa un -1
}

console.log(linearSearch([1,2,3,4,5,6],3))