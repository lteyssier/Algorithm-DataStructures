//Stack
/*A LIFO data structure (last in firs off)
The last element added to the stack will be the first element removed from the stack

Where stacks are used
-Managing function invocationes
-Undo/redo
-Routing (the history object) is trated like a stack

 */

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor() {
        this.first = null
        this.last = null
        this.size =0
    }

    push(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else{
            var temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }

    pop(){
        if(!this.first) return null
        var temp = this.first
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

var stack = new Stack()
console.log(stack.push("first"))
console.log(stack.push("second"))
console.log(stack.push("third"))
console.log(stack.push("fourth"))
console.log(stack.pop)
console.log(stack)