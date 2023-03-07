//Binary Search

//Write a function called binarySearch which accepts a sorted array and 
//a value and returns the index at which the value exists. Otherwise, return -1. 

function binarySearch(arr,elem){
    var start = 0; //define posición inicial
    var end = arr.length -1 //posición final
    var middle = Math.floor((start + end)/2) //calcula de inicio un punto medio 
    while(arr[middle]!== elem && start<=end){ //mientras el elemento no cumpla ser punto medio...
        if(elem<arr[middle]){ //si el elemento está por debajo de la mitad, reasigna el fin a la posición anterior al centro
            end=middle-1  
        } else{  //caso contrario el se recorre el inicio a la posición siguiente del punto medio 
            start = middle +1
        }
        middle = Math.floor((start + end)/2) //se renombran el punto medio para continuar la búqueda
    }
    if(arr[middle]=== elem){ //si la condición se ha cumplido entonces se detiene y regresa el valor encontrado
        return middle
    }
    return -1 //caso contrario devuelve un -1
}

binarySearch([2,4,5,6,8,10,34,45],15)