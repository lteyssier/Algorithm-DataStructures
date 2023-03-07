//Linear search solution

/*function linearSearch(array1, number1){
    // add whatever parameters you deem necessary - good luck!
    if(array1.indexOf(number1)){
        return array1.indexOf(number1)
    }else if(array1.indexOf(number1)==0){
        return 0
    }else{
        return -1
    }
  }*/

function linearSearch(arr,val){
    for(var i =0;i<arr.length; i++){ 
        if(arr[i]===val){ //recorre el arreglo hasta en contrar el valor
            return i  //si encuentra el valor, entonces regresa la posición i(index)
        }
    }
    return -1 //caso contrario regresa un -1
}

console.log(linearSearch([1,2,3,4,5,6],3))