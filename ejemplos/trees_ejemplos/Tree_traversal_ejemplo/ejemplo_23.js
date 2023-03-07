//Tree traversal

//Breadth First Search
/*Steps-Iteratively
-Create a queue (this can be an array) and a variable to store the values of nodes visited
-Place the root node as there is anything in the queue
-Loop as long as there is anything in the queue
    -Dequeue a node from the queue and push tha value of the node into the variable
     that stores the nodes
    -If there is a ledt property on the node dequeued - add it to the queue
    -If there is a right property on the node dequeued - add it to the queue
 */

//Depth First Preorder    
/*Steps
-Create a variable to store the values of nodes visited
-Store the root of the BST in a variable called current
-Write a helper function which accepts a node
    -Push the value of the node to the variable that stores the values
    -If the node has a left property, calle the helper function with
     the left property on the node
    -If the node has a right property, call the helper function with the
     right property on the node
 */

//DFS PostOrder
/*Steps
-Create a variable to store the values of nodes visited
-Store the root of the BST in a variable called current
-Write a helper function which accepts a node
    -If the node has a left property, call the helper function with the left
     property on the node
    -If the node has a right property, call the helper function with the right
     property on the node
    -Push the value of the node to the variable that stores the value
    -Invoke the helper function with the current variable
Return the array of values
 */

//DFS InOrder
/*Steps
-Create a variable to store the values of nodes visited
-Store the root of the BST in a variables called current
-Write a helper function which accepts a node
    -If the node has a left property, call the helper function with the left 
     property on the node
    -Push the value of the node to the variable that stores the values
    -If the node has a right property, call the helper function with the right
     property on the node
-Invoke the helper function with the current variable
*/

class Node {
        constructor(value){
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }
    
    class BinarySearchTree {
        constructor(){
            this.root = null;
        }
        insert(value){
            var newNode = new Node(value);
            if(this.root === null){
                this.root = newNode;
                return this;
            }
            var current = this.root;
            while(true){
                if(value === current.value) return undefined;
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else {
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } 
                    current = current.right;
                }
            }
        }
        find(value){
            if(this.root === null) return false;
            var current = this.root,
                found = false;
            while(current && !found){
                if(value < current.value){
                    current = current.left;
                } else if(value > current.value){
                    current = current.right;
                } else {
                    found = true;
                }
            }
            if(!found) return undefined;
            return current;
        }
        contains(value){
            if(this.root === null) return false;
            var current = this.root,
                found = false;
            while(current && !found){
                if(value < current.value){
                    current = current.left;
                } else if(value > current.value){
                    current = current.right;
                } else {
                    return true;
                }
            }
            return false;
        }
        BFS(){
            var node = this.root,
                data = [],
                queue = [];
            queue.push(node);
    
            while(queue.length){
               node = queue.shift();
               data.push(node.value);
               if(node.left) queue.push(node.left);
               if(node.right) queue.push(node.right);
            }
            return data;
        }
        DFSPreOrder(){
            var data =[]
            function traverse(node){
                data.push(node.value)
                if(node.left) traverse(node.left)
                if(node.right) traverse(node.right)
            }
            traverse(this.root)
            return data
        }
        DFSPostOrder(){
            var data=[]
            function traverse(node){
                if(node.left) traverse(node.left)
                if(node.right) traverse(node.right)
                data.push(node.value)
            }
            traverse(this.root)
            return data
        }
        DFSInOrder(){
            var data=[]
            function traverse(node){
                //if(node.left) traverse(node.left)
                node.left && traverse(node.left)
                data.push(node.value)
                //if(node.right) traverse(node.right)
                node.right && traverse(node.right)
            }
            traverse(this.root)
            return data
        }
}

var tree = new BinarySearchTree()
console.log(tree.insert(10))
console.log(tree.insert(6))
console.log(tree.insert(15))
console.log(tree.insert(3))
console.log(tree.insert(8))
console.log(tree.insert(20))
console.log(tree.BFS())
console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())
console.log(tree.DFSInOrder())
