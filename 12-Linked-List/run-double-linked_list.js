const DoubleLinkedList = require('./DoubleLinkedList');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const dll = new DoubleLinkedList();

console.log('isEmpty', dll.isEmpty());
arr.forEach(value => dll.add(value));

console.log('isEmpty', dll.isEmpty());
console.log('size', dll.size());
console.log('getHead', dll.getHead());
console.log('getTail', dll.getTail());
console.log('isPresent', dll.isPresent(15));
console.log('isPresent', dll.isPresent(50));

console.log('print', dll.print());
console.log('printReverse', dll.printReverse());
console.log('toArrayReverse', dll.toArrayReverse());

console.log('add 30', dll.add(30));
console.log('print', dll.print());
console.log('remove 9', dll.remove(9))
console.log('remove 50', dll.remove(50))
console.log('print', dll.print());
console.log('element at index 10', dll.elementAt(10))
console.log('element at index -10', dll.elementAt(-10))
console.log('element at index 100', dll.elementAt(100))
console.log('insert 50 at index 10', dll.insertAt(50,10))
console.log('print', dll.print());
