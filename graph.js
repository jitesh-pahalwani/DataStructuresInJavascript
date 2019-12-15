class Graph{
    constructor(value){
      this.adjList = {};
    }

    // a method to add a vertex
    addNode(node){
      this.adjList[node] = {node, edges: []};
    }

    // a method to add an edge between two nodes
    addEdge(node1, node2){
      this.adjList[node1].edges.push(node2);
      this.adjList[node2].edges.push(node1);
    }

    // a method to remove a node
    removeNode(node){
      delete this.adjList[node];

      Object.keys(this.adjList).map(eachNode => {
        let currentNode = this.adjList[eachNode];
        let currentIndex = currentNode.edges.indexOf(node);
        if(currentIndex > -1){
          currentNode.edges.splice(currentIndex,1);
        }
      })
    }

}

var myGraph = new Graph();

myGraph.addNode(1);
myGraph.addNode(2);
myGraph.addNode(3);
myGraph.addNode(4);
myGraph.addNode(5);

myGraph.addEdge(1,5);

myGraph.removeNode(5);

console.log(myGraph);

/*
{
1:{node:1, edges:[2,5]},
2:{node:2, edges:[1,5,3,4]},
3:{node:3, edges:[2,4]},
4:{node:4, edges:[2,5,3]},
5:{node:5, edges:[4,1,2]}
}
*/
