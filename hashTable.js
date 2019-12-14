class HashTable{
    constructor(tableSize){
      this._storage = [];
      this._tableSize = tableSize;
    }

    // a method to insert an item in the hash table.
    insert(key, value){
      const targetIndex = this._hash(key, this._tableSize);
      if(!this._storage[targetIndex]){
        this._storage[targetIndex] = [];
      }
      this._storage[targetIndex].push([key, value]);
    }

    // a method to retrieve an item at a particular key
    retrieve(key){
      const targetIndex = this._hash(key, this._tableSize);
      const targetArray = this._storage[targetIndex];

      if(targetArray){
        for(let i=0;i<targetArray.length;i++){
          const currentSubArray = targetArray[i];
          if(currentSubArray[0] === key)
          return currentSubArray[1];
        }
      }

    }

    // a hash method that returns the index in which the item has to be added.
    _hash(key, tableSize){
      return key % tableSize;
    }
}

var myHT = new HashTable(5);

console.log(myHT);

myHT.insert(24, 'a');
myHT.insert(34, 'b');
myHT.insert(12, 'c');

/*{_storage: [empty, empty, [[12, 'c']], empty, [[24, 'a'],[34, 'b']]]}*/

console.log(myHT);

console.log(myHT.retrieve(34));
