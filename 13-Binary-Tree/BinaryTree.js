class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  display() {
    console.log(this.root);
    console.log(JSON.stringify(tree, null, 2))
  };

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) return this.root = newNode;
    
    return this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (node.value === newNode.value) return null;

    const direction = node.value > newNode.value ? "left" : "right";
    if (!node[direction]) {
      node[direction] = newNode;
      return;
    }

    return this.insertNode(node[direction], newNode);
  }

  findMin(node = this.root) {
    if (!node) return null;
    return node.left ? this.findMin(node.left) : node.value;
  }

  findMax(node = this.root) {
    if (!node) return null;
    return node.right ? this.findMax(node.right) : node.value;
  }

  isPresent(value, node = this.root) {
    if (!node) return false
    if (node.value === value) return true
    
    const direction = value < node.value ? "left" : "right";
    if (node[direction]) return this.isPresent(value, node[direction])

    return false
  }

  findMinHeight(node = this.root) {
    if (!node) return -1;
    return 1 + Math.min(
      this.findMinHeight(node.left),
      this.findMinHeight(node.right)
    );

  }

  findMaxHeight(node = this.root) {
    if (!node) return -1;
    return 1 + Math.max(
      this.findMaxHeight(node.left),
      this.findMaxHeight(node.right)
    );
  }

  isBalanced() {
      return this.findMaxHeight() === this.findMinHeight()
  }

  // DFS - Depth First Search in Binary Tree
  inorder(node = this.root, nodes = []) {
    if (!node) return null
    this.inorder(node.left, nodes)
    nodes.push(node.value)
    this.inorder(node.right, nodes)
    return nodes
  }

  // DFS - Depth First Search in Binary Tree
  preorder(node = this.root, nodes = []) {
    if (!node) return null
    nodes.push(node.value)
    this.preorder(node.left, nodes)
    this.preorder(node.right, nodes)
    return nodes
  }

  // DFS - Depth First Search in Binary Tree
  postorder(node = this.root, nodes = []) {
    if (!node) return null
    this.postorder(node.left, nodes)
    this.postorder(node.right, nodes)
    nodes.push(node.value)
    return nodes
  }

  // BFS - Breadth First Search in Binary Tree
  levelOrder(node = this.root) {
    if (!node) return null

    const queue = [];
    const result = [];
    queue.push(node)

    while (queue.length > 0) {
      const tempNode = queue.shift()
      result.push(tempNode.value)
      if (tempNode.left) queue.push(tempNode.left)
      if (tempNode.right) queue.push(tempNode.right)
    }
    return result;
  }

  // BFS - Breadth First Search in Binary Tree
  reverseLevelOrder(node = this.root) {
    if (!node) return null

    const queue = [];
    const result = [];
    queue.push(node)

    while (queue.length > 0) {
      const tempNode = queue.shift()
      result.push(tempNode.value)
      if (tempNode.right) queue.push(tempNode.right)
      if (tempNode.left) queue.push(tempNode.left)
    }
    return result;
  }

  findValueAndParent(value, node = this.root, parent = null) {
    if (!node) return { node: null, parent: null };
    if (value === node.value) return { node, parent };

    if (value < node.value) {
      return this.findValueAndParent(value, node.left, node);
    } else {
      return this.findValueAndParent(value, node.right, node);
    }
  }
  
  remove(value) {
    const { node: target, parent } = this.findValueAndParent(value);

    if (!target) return null;

    const children = (target.left ? 1 : 0) + (target.right ? 1 : 0);

    let direction;
    switch (children) {
    
      case 0:
        if (!parent) {
          this.root = null;
          return;
        }
        direction = parent.left === target ? "left" : "right";
        parent[direction] = null;
        return;

      case 1:
        const replacement = target.right ? target.right : target.left;
        if (!parent) {
          this.root = replacement;
          return;
        }
        direction = parent.left === target ? "left" : "right";
        parent[direction] = replacement;
        return;

      case 2:
        const newChildValue = this.findMin(target.right);
        this.remove(newChildValue);
        target.value = newChildValue;
        break;
      default:
        console.log(`Sorry, something went wrong.`);
    }

  }

  invert = (node = this.root) => {

    if (!node) return null;
    
    [node.left, node.right] = [node.right, node.left];
    this.invert(node.left);
    this.invert(node.right);
  }

}

function isBinarySearchTree(tree) {
  return isBinarySearchSubTree(tree.root)
}

function isBinarySearchSubTree(node) {
  return !node
          || (
              (!node.left || node.left.value < node.value)
            && (!node.right || node.right.value > node.value)
            && isBinarySearchSubTree(node.left)
            && isBinarySearchSubTree(node.right)
            )
}

module.exports = {
  BinaryTree
};