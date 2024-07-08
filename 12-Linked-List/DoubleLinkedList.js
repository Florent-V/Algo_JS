class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  isEmpty() {
    return this.head === null;
  }

  size(node = this.head, index = 0) {
    if (node === null) {
      return index;
    }

    return this.size(node.next, index + 1);
  }

  print(currentNode = this.head, arr = []) {
    if (!currentNode) {
      return arr;
    }
    arr.push(currentNode.data);
    return this.print(currentNode.next, arr);
  }

  printReverse(node = this.head) {
    if (node === null) {
      return;
    }

    this.printReverse(node.next);
    console.log(node.data);
  }

  toArrayReverse(node = this.head, arr = []) {
    if (node === null) {
      return arr;
    }

    this.toArrayReverse(node.next, arr);
    arr.push(node.data);
    return arr;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  remove(data) {
    this.head = this._remove(this.head, data);
    if (this.head === null) {
      this.tail = null;
    }
  }

  _remove(node, data) {
    if (node === null) {
      return null;
    }

    if (node.data === data) {
      if (node.prev !== null) {
        node.prev.next = node.next;
      }
      if (node.next !== null) {
        node.next.prev = node.prev;
      }
      return node.next;
    }

    node.next = this._remove(node.next, data);
    return node;
  }

  isPresent(data, node = this.head, index = 0) {
    if (node === null) {
      return -1;
    }

    if (node.data === data) {
      return index;
    }

    return this.isPresent(data, node.next, index + 1);
  }

  elementAt(index, node = this.head, currentIndex = 0) {
    if (node === null) {
      return null;
    }

    if (currentIndex === index) {
      return node.data;
    }

    return this.elementAt(index, node.next, currentIndex + 1);
  }

  insertAt(data, index, node = this.head, currentIndex = 0) {
    if (index === 0) {
      const newNode = new Node(data);
      newNode.next = this.head;
      if (this.head !== null) {
        this.head.prev = newNode;
      } else {
        this.tail = newNode;
      }
      this.head = newNode;
      return;
    }

    if (node.next === null && currentIndex === index - 1) {
      const newNode = new Node(data);
      node.next = newNode;
      newNode.prev = node;
      this.tail = newNode;
      return;
    }

    if (currentIndex === index - 1) {
      const newNode = new Node(data);
      newNode.next = node.next;
      newNode.prev = node;
      node.next.prev = newNode;
      node.next = newNode;
      return;
    }

    return this.insertAt(data, index, node.next, currentIndex + 1);
  }
}

module.exports = DoubleLinkedList;
