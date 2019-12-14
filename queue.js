class Queue{
    constructor(){
      this._storage = {};
      this._length = 0;
      this._frontIndex = 0;
    }

    //a method to insert an item to the queue
    enqueue(value){
      if(value){
        this._storage[this._length] = value;
        this._length++;
      }
    }

    //a method to remove an item from the queue
    dequeue(){
      if(this._length){
        let frontValue = this._storage[this._frontIndex];
        this._storage[this._frontIndex] = undefined;
        this._length--;
        this._frontIndex++;
        return frontValue;
      }
    }

    //a method to return the front element of the queue
    front(){
      return this._storage[this._frontIndex];
    }
}

var myQueue = new Queue();

myQueue.enqueue('Toyota');
myQueue.enqueue('Suzuki');
myQueue.enqueue('Ford');

console.log(myQueue);

myQueue.dequeue();

console.log(myQueue);

console.log(myQueue.front());
