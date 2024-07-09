const { BinaryTree } = require('./BinaryTree');

const tree = new BinaryTree();
const values = [10, 5, 20, 2, 7, 15, 30]

values.forEach(value => tree.insert(value));

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

console.log(tree.isPresent(30))
// console.log('before remove', tree.levelOrder())


console.log('findMaxHeight', tree.findMaxHeight())
console.log('findMaxHeight', tree.findMinHeight())


console.log('inorder', tree.inorder())
console.log('preorder', tree.preorder())
console.log('postorder', tree.postorder())

console.log('levelOrder', tree.levelOrder())
console.log('reverseLevelOrder', tree.reverseLevelOrder())

console.log('remove', tree.remove(20))
console.log('after remove', tree.levelOrder())