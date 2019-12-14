class LinkedList{
    constructor(value){
      this.head = {value, next: null};
      this.tail = this.head;
    }

    // a method to insert an item at the end of the linked list
    insert(value){
      let newNode = {value, next: null};
      this.tail.next =  newNode;
      this.tail = newNode;
    }

    // a method to remove an item from a linked list
    remove(value){
      var currentNode = this.head;
      var prev = currentNode;

      while(currentNode.value !== value){
        prev = currentNode;
        currentNode = currentNode.next;
      }
      if(prev.next === null){
        return -1;
      }
      if(currentNode.value === this.head.value){
        this.head = currentNode.next;
        return currentNode;
      }
      if(currentNode.value === this.tail.value){
        this.tail = prev;
      }

      prev.next = currentNode.next;
      return currentNode;
    }

    // a method to remove an item from the end of a linked list
    removeTail(){
      var prevNode = this.head;

      while(prevNode.next !== this.tail){
        prevNode = prevNode.next;
      }
      prevNode.next = null;
      this.tail = prevNode;
    }
}

var myLinkedList = new LinkedList('Toyota');

myLinkedList.insert('Suzuki');

/*
{head:{value: 'Toyota', next: {value: 'Suzuki', next: null}}}
*/

myLinkedList.insert('Mitsubishi');
myLinkedList.insert('Ford');
myLinkedList.insert('Tesla');

myLinkedList.removeTail();



console.log(myLinkedList);
