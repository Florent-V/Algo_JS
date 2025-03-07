function dfs(graph, root) {
  var stack = [];
  var tempV;
  var visited = [];
  var tempVNeighbors = [];
  stack.push(root);
  while (stack.length > 0) {
    tempV = stack.pop();
    if (visited.indexOf(tempV) == -1) {
      visited.push(tempV);
      tempVNeighbors = graph[tempV];
      for (var i = 0; i < tempVNeighbors.length; i++) {
        if (tempVNeighbors[i] == 1) {
          stack.push(i);
        }
      }
    }
  }
  return visited;
}

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(dfs(exDFSGraph, 3));