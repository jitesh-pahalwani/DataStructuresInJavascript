class Stack{
    constructor(){
      this._storage = {};
      this._length = 0;
    }

    //a method to insert an item to the stack
    push(value){
      if(value){
        this._storage[this._length] = value;
        this._length++;
      }
    }

    //a method to remove an item from the stack
    pop(){
      if(this._length){
        let lastValue = this._storage[this._length - 1];
        this._storage[this._length - 1] = undefined;
        this._length--;
        return lastValue;
      }
    }

    //a method to return the topmost element of the stack
    peek(){
      return this._storage[this._length - 1];
    }
}

var myStack = new Stack();

myStack.push('Toyota');
myStack.push('Suzuki');
myStack.push('Ford');

console.log(myStack);

myStack.pop();

console.log(myStack);

console.log(myStack.peek());
