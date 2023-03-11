//Hash table
/* Hash table are used to store key-value pairs
They are like arrays, but the keys are no ordered. Unlike arrays, hash tables are fast 
for all of the following operations: finding values, adding new values, and removing
values
*/

function hash(key, arrayLen){
    let total =0
    let Weird_prime = 31
    for(let i=0; i<Math.min(key.length,100);i++){
        //map "a" to 1, "b" to 2, "c" to 3, etc
        let char = kay[i]
        let value = char.charCodeAt(0)-96
        total = (total*Weird_prime+value)%arrayLen
    }
    return total
}
/*Handling Collisions
-Separate chaining
 At each index in our array we store values using a more sophisticated data structure 
 (e.g an array or a linked list). This allows us to store multiple key-value pairs at the same index
-Linear Probing
 When we find a collision, we search through the array to find the next empty slot.Unlike
 with separate chaining, this allows us to store a single key-value at each index
 */

/*Set/Get
Set
1.Accepts a key and a value
2.Hashes the key
3.Stores the key-value pair in the hash table array via separate chaining
Get
1.Accepts a key
2.Hashes the key
3.Retrieves the key-value pair in the hash table
4.If the key isn't found, returns undefined
*/

/* Keys/ Values
Keys
1.Loops through the hash table array and returns an array of keys in the table
Values
1. Loops through the hash table array and returns an array of values in the table
*/


 class HashTable {
    constructor(size=53){
        this.keyMap = new Array(size)
    }
    _hash(key) {
        let total = 0
        let Weird_prime =31
        for (let i=0; i<Math.min(key.length,100);i++){
            let char = key[i]
            let value = char.charCodeAt(0)-96
            total = (total * Weird_prime + value) % this.keyMap.length
        }
        return total
    }
    set(key,value){
        let index = this._hash(key)
        if(!this.keyMap[index]){
            this.keyMap[index]=[]
        }
        this.keyMap[index].push([key, value])
    }
    get(key){
        let index = this._hash(key)
        if(this.keyMap[index]){
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0]=== key){
                    return this.keyMap[index][i]
                }
            }
        }
        return undefined
    }
    keys(){
        let keysArr = []
        for(let i=0; i <this.keyMap.length;i++){
            if(this.keyMap[i]){
                for(let j=0; j<this.keyMap[i].length;j++){
                    if(!keysArr.includes(this.keyMap[i][j][0]))
                    keysArr.push(this.keyMap[i][j][0])
                }
            }
        }
        return keysArr
    }
    values(){
        let valuesArr = []
        for(let i=0; i <this.keyMap.length;i++){
            if(this.keyMap[i]){
                for(let j=0; j<this.keyMap[i].length;j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1]))
                    valuesArr.push(this.keyMap[i][j][1])
                }
            }
        }
        return valuesArr
    }
 }

let ht = new HashTable()
ht.set("hello world", "goodbye")
ht.set("super","heroe")
ht.set("jag","kommer fran Sverige")
ht.set("green","valuehexofGreen")
console.log(ht)
console.log(ht.get("green"))
console.log(ht.keys())
console.log(ht.values())

