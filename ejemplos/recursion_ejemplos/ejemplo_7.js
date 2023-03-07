//pure Recursion
//La existencia de recursión sin agentes externos (como helper method recursion)
//Nota. Para arreglos, usar métodos slice, spread operator y concat para hacer copias de arreglo y así no mutarlos

//obtener valores impares
function collectOddValues(arr){
    let newArr = [] //Nota. cada que se itere un arreglo, el arreglo se reinicia
    if(arr.length === 0){
        return newArr
    }

    if (arr[0] % 2 !== 0){
        newArr.push(arr[0]) //esto genera un nuevo arreglo
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1))) //va a concatenar un grupo de arreglos al final
    return newArr
}

//ejemplo del proceso
/* al entrar a concat
    concat(collectOddValues([1,2,3,4,5])
    [1].concat(collectOddValues([2,3,4,5]) => [1].[3].[5]
            [].concat(collectOddValues([3,4,5]) => [].[3].[5]
                    [3].concat(collectOddValues([4,5]) => [3].[5]
                            [].concat(collectOddValues([5]) => [].[5]
                                [5].concat(collectOddValues([])=> [5].[]
    al agrupar 
    concat[1][3][5] => [1,3,5]
*/

console.log(collectOddValues([1,2,3,4,5]))