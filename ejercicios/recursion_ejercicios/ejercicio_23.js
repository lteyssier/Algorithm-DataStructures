/*collectStrings
Write a function called collectStrings which accepts an object and 
returns an array of all the values in the object that have a typeof string
*/
//helper method recursion 
function collectStrings(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') { //si la n(o) llave es de tipo cadena
                stringsArr.push(o[key]); //agregar al arreglo definido
            }
            else if(typeof o[key] === 'object') { //si la n(o)-ésima llave es de tipo objeto
                return gatherStrings(o[key]); //volver a aplicar para repetir
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}

//Pure recursion
function collectStrings1(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings1(obj[key])); //a diferencia de helper, va concatenando y al final agrupa tos los mini arreglos generados
        }
    }
 
    return stringsArr;
}