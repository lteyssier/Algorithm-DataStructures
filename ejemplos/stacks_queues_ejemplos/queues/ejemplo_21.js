//Queues
/*(FIFO)First in First Out
 */

/*Enqueue pseudocode
-This function accepts some value
-Create a new node using that value passed to the function 
-If there are no nodes in the queue, set this node to be the first and last property
of the queue
-Otherwise, set the next property on the current last to be that node, and then set
the last property of the queue to be that node
-Increment the size by 1

Dequeue pseudocode
-If there is no first property, just return null
-Store the first property in a variable
-See if the first is the same as the last (check if there is only 1 node). If so, 
set the first and last to be null
-If there is more than 1 node, set the first proeperty to be the next property of first
-Decremente the size by 1
-Return the value of the node dequeued
 */

class Node{
    constructor(value) {
        this.value=value
        this.next = null 
    }
}

class Queue{
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else{
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size

    }
    dequeue(){
        if(!this.first) return null

        var temp = this.first
        if (this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
         this.size--
        return temp.value
    }
}

var q = new Queue()
console.log(q.enqueue("First"))
console.log(q.enqueue("second"))
console.log(q.enqueue("third"))
console.log(q.enqueue("Fourth"))
console.log(q)
console.log(q.dequeue())
console.log(q)