/*How BSTS work
Every parent node has at most two children
Every node to the left of a parent node is always less than the parent
Every node to the right of a parent node is always greater than the parent
*/

/*Inseting a node
-Create new node
-Starting at the root
    -Check is there is a root, if not - the root now becomes that new node
    -if there is a root, chek if the value of the new node is greater than or
     less than the value of the root
    
     -If it is greater 
        -Check to see if there is a node to the right
            -if there is, move to that node and repeat these steps
            -if there is not, add that node as the right property
    -If it is less
        -Check to see if there is a node to the left
            -If there is, move to that node and repeat these steps
            -If there is not, add that node as the left property
 */
/*Find
-Starting at the root
    -Check if there is a root, if not - we're done searching
    -If there is a root, checkif the value of the new node is the value we are looking
     for. If we found it, we're done
    -If not, check to see if the value is greater than or less than the value of the root
    -If it is greater
        -Check to see if there is a node to the right
            -If there is, move to that node and repeat these steps
            -If there is not, we're done searching
    -If it is less
        -Check to see if there is a node to the left
            -If there is, move to that node and repeat these steps
            -If there is not, we're done searching
*/

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value) {
        var newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
            return this
        } else{
            var current = this.root
            while(true){
                if(value === current.value)return undefined
                if(value<current.value){
                    if(current.left === null){
                        current.left = newNode
                        return this
                    }else{
                        current = current.left
                    }
                }else if(value> current.value){
                    if(current.right=== null){
                        current.right = newNode
                        return this
                    } else{
                        current = current.right
                    }
                }
            }
        }
    }

    find(value){
        if(this.root===null) return false
        var current = this.root,
            found = false
        while (current && !found){
            if(value < current.value){
                current = current.left
            } else if(value > current.value){
                current = current.right
            } else{
                return true
            }
        }
        return false
    }

}

var tree = new BinarySearchTree()
console.log(tree.insert(10))
console.log(tree.insert(5))
console.log(tree.insert(13))
console.log(tree.insert(11))
console.log(tree.insert(2))
console.log(tree.insert(16))
console.log(tree.find(13))
console.log(tree.find(100))