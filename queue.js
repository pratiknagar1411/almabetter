class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.enqueue=function(value){
            const node = new Node(value); // creates the node using class Node
        
            if (this.head) { // if the first Node exitsts
            this.tail.next = node; // inserts the created node after the tail of our Queue
            this.tail = node; // now the created node is the last node
            }  
            else { // if there are no nodes in the Queue
            this.head = node; // the created node is a head 
            this.tail = node // also the created node is a tail in Queue because it is single.
            }
            this.length++; // increases the length of Queue by 1
        }
        this.dequeue=function() {
            const current = this.head; // saves the link to the head which we need to remove
            this.head = this.head.next; // moves the head link to the second Node in the Queue
            this.length--; // decreaments the length of our Queue
          
            return current.value; // returns the removed Node's value
        }
        this.print=function() {
            let current = this.head; // saves a link to the head of the queue
        
            while(current) { // goes through each Node of the Queue
                console.log(current.value); // prints the value of the Node in console
                current = current.next; // moves link to the next node after head
            }
        }
        this.isEmpty=function() {
            return this.length === 0;
        }
        
        this.getHead=function() {
            return this.head.value;
        }
        this.getLength=function() {
            return this.length;
        }}
}
let que= new queue();
que.enqueue(5);
que.enqueue(2);
que.enqueue(12);
que.enqueue(45);
que.enqueue(36);
que.print();
que.dequeue();
que.print();
console.log(que.isEmpty());
console.log(que.getHead());
console.log(que.getLength());
que.dequeue();
que.print();
console.log(que.getHead());
console.log(que.getLength());