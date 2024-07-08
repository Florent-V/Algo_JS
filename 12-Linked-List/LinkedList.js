class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  gethead() {
    return this.head;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size(currentNode = this.head) {
    if (!currentNode) {
      return 0;
    }
    return 1 + this.size(currentNode.next);
  }

  print(currentNode = this.head, arr = []) {
    if (!currentNode) {
      return arr;
    }
    arr.push(currentNode.element);
    return this.print(currentNode.next, arr);
  }

  add(element, currentNode = this.head) {
    if (!this.head) {
      this.head = new Node(element);
    } else if (!currentNode.next) {
      currentNode.next = new Node(element);
    } else {
      this.add(element, currentNode.next);
    }
  }

  remove(element, currentNode = this.head, previousNode = null) {
    if (!currentNode) {
      return;
    }
  
    if (currentNode.element === element) {
      if (previousNode) {
        previousNode.next = currentNode.next;
      } else {
        this.head = currentNode.next;
      }
    } else {
      this.remove(element, currentNode.next, currentNode);
    }
  }

  removeAt(index, currentNode = this.head, currentIndex = 0, previousNode = null) {
    if (!currentNode || index < 0) {
      return;
    }

    if (currentIndex === index) {
      if (previousNode) {
        previousNode.next = currentNode.next;
      } else {
        this.head = currentNode.next;
      }
    } else {
      this.removeAt(index, currentNode.next, currentIndex + 1, currentNode);
    }
  }

  isPresent(elt, currentNode = this.head, index = 0) {
    if (!currentNode) {
      return -1;
    }
    if (currentNode.element === elt) {
      return index;
    }
    return this.isPresent(elt, currentNode.next, index + 1);
  }

  elementAt(i, currentNode = this.head, index = 0) {
    if (!currentNode) {
      return null;
    }
    if (index === i) {
      return currentNode.element;
    }
    return this.elementAt(i, currentNode.next, index + 1);
  }

  insertAt(element, i, currentNode = this.head, index = 0, previousNode = null) {
    if (!currentNode && i === 0) {
      this.head = new Node(element);
      return;
    }
    if (!currentNode) {
      return;
    }
    if (index === i) {
      const newNode = new Node(element);
      newNode.next = currentNode;
      if (previousNode) {
        previousNode.next = newNode;
      } else {
        this.head = newNode;
      }
      return;
    }
    return this.insertAt(element, i, currentNode.next, index + 1, currentNode);
  }
}

module.exports = LinkedList;
