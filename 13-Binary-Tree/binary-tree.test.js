const { BinaryTree } = require('./BinaryTree');

describe('BinaryTree', () => {
  let tree;
  let values;

  beforeEach(() => {
    tree = new BinaryTree();
    values = [10, 5, 20, 2, 7, 15, 30];
    values.forEach((value) => tree.insert(value));
  });

  describe('insert', () => {
    it('should insert a new value into the tree', () => {
      tree.insert(25);
      expect(tree.isPresent(25)).toEqual(true);
    });
  });

  describe('findMin', () => {
    it('should return the minimum value in the tree', () => {
      expect(tree.findMin()).toEqual(2);
    });
  });

  describe('findMax', () => {
    it('should return the maximum value in the tree', () => {
      expect(tree.findMax()).toEqual(30);
    });
  });

  describe('isPresent', () => {
    it('should return true if the value is present in the tree', () => {
      expect(tree.isPresent(15)).toEqual(true);
    });

    it('should return false if the value is not present in the tree', () => {
      expect(tree.isPresent(1)).toEqual(false);
    });
  });

  describe('findMinHeight', () => {
    it('should return the minimum height of the tree', () => {
      expect(tree.findMinHeight()).toEqual(2);
    });
  });

  describe('findMaxHeight', () => {
    it('should return the maximum height of the tree', () => {
      expect(tree.findMaxHeight()).toEqual(2);
    });
  });

  describe('isBalanced', () => {
    it('should return true if the tree is balanced', () => {
      expect(tree.isBalanced()).toEqual(true);
    });
  });

  describe('inorder', () => {
    it('should return the nodes in inorder traversal', () => {
      expect(tree.inorder()).toEqual([2, 5, 7, 10, 15, 20, 30]);
    });
  });

  describe('preorder', () => {
    it('should return the nodes in preorder traversal', () => {
      expect(tree.preorder()).toEqual([10, 5, 2, 7, 20, 15, 30]);
    });
  });

  describe('postorder', () => {
    it('should return the nodes in postorder traversal', () => {
      expect(tree.postorder()).toEqual([2, 7, 5, 15, 30, 20, 10]);
    });
  });

  describe('levelOrder', () => {
    it('should return the nodes in level order traversal', () => {
      expect(tree.levelOrder()).toEqual([10, 5, 20, 2, 7, 15, 30]);
    });
  });

  describe('reverseLevelOrder', () => {
    it('should return the nodes in reverse level order traversal', () => {
      expect(tree.reverseLevelOrder()).toEqual([10, 20, 5, 30, 15, 7, 2]);
    });
  });

  describe('findValueAndParent', () => {
    it('should return the node and its parent', () => {
      expect(tree.findValueAndParent(15)).toEqual({ node: { value: 15, left: null, right: null }, parent: { value: 20, left: { value: 15, left: null, right: null }, right: { value: 30, left: null, right: null } } });
    });
  });

  describe('remove', () => {
    it('should remove a node from the tree', () => {
      tree.remove(5);
      expect(tree.inorder()).toEqual([2, 7, 10, 15, 20, 30]);
    });
  });

  describe('invert', () => {
    it('should invert the tree', () => {
      tree.invert();
      expect(tree.inorder()).toEqual([30, 20, 15, 10, 7, 5, 2]);
    });
  });
});

