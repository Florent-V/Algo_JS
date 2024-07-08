/*
Write a function bfs() that takes an adjacency matrix graph (a two-dimensional array) and a node label
root as parameters. The node label will just be the integer value of the node between 0 and n - 1,
where n is the total number of nodes in the graph.
Your function will output a JavaScript object key-value pairs with the node and its distance from the root.
If the node could not be reached, it should have a distance of Infinity.
*/

function bfs(graph, root) {
  // Distance object returned
  var nodesLen = {};
  // Set all distances to infinity
  for (var i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }
  nodesLen[root] = 0; // ...except root node
  console.log(nodesLen)
  var queue = [root]; // Keep track of nodes to visit
  var current; // Current node traversing
  // Keep on going until no more nodes to traverse
  while (queue.length !== 0) {
    current = queue.shift();
    // Get adjacent nodes from current node
    var curConnected = graph[current]; // Get layer of edges from current
    var neighborIdx = []; // List of nodes with edges
    var idx = curConnected.indexOf(1); // Get first edge connection
    console.log('idx', idx)
    while (idx !== -1) {
      neighborIdx.push(idx); // Add to list of neighbors
      idx = curConnected.indexOf(1, idx + 1); // Keep on searching
    }
    console.log('neighborIdx', neighborIdx)
    // Loop through neighbors and get lengths
    for (var j = 0; j < neighborIdx.length; j++) {
      // Increment distance for nodes traversed
      if (nodesLen[neighborIdx[j]] === Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]); // Add new neighbors to queue
      }
    }
  }
  return nodesLen;
}

var exBFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 1, 1, 0]
];
console.log(bfs(exBFSGraph, 3));