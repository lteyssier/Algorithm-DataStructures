//Normal sort

function numberCompare(num1,num2){
    return num1 - num2
}

[4,2,7,3,10].sort(numberCompare)

function compareByLen(str1,str2){
    return str1.lenght -str2.lenght
}

["Bubble", "Sort","Data", "Data Structure"].sort(compareByLen)