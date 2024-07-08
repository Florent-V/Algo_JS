const { BinaryTree } = require('./BinaryTree');

const tree = new BinaryTree();
const values = [30, 20, 40, 15, 25, 35, 45, 10, 18, 22, 28, 32, 38, 42, 48, 5, 12, 16, 24, 26, 31, 34, 39, 41, 46, 49, 3, 8, 14, 21];
values.forEach(value => tree.insert(value));


console.log(tree.isPresent(30))
console.log('before remove', tree.levelOrder())
console.log('remove', tree.remove(40))
console.log('after remove', tree.levelOrder())
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
displayTree(tree)
const tree2 = new BinaryTree();
tree2.insert(1);
console.log(tree2)
console.log(tree2.levelOrder())
tree2.insert(4);
console.log(tree2)
console.log(tree2.levelOrder())