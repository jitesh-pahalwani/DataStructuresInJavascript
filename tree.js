class Tree{
    constructor(value){
      this.value = value;
      this.children = [];
    }

    // a method to insert a new child to a node
    insert(value){
      var newNode = new Tree(value);
      this.children.push(newNode);
      return newNode;
    }
}

var myTree = new Tree('Living Things');

console.log(myTree);

var fishesTree = myTree.insert('Fishes');
var birdsTree = myTree.insert('Birds');
var apesTree = myTree.insert('Apes');

var humanTree = apesTree.insert('Humans');

console.log(myTree);
/*
{
value: 'Living Things',
children: [
{value: 'Fishes', children: []},
{value: 'Birds', children: []},
{value: 'Apes', children: [{value: 'Humans', children: []}]}
]
}
*/

// a method to traverse the Tree
function traverse(tree){
  console.log(tree.value);
  tree.children.forEach((child) => {
    traverse(child);
  });
}

traverse(myTree);
