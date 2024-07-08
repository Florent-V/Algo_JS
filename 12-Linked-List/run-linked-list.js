const LinkedList = require('./LinkedList');

const elements = [34, 7, 23, 32, 5, 62, 3, 74, 45, 17, 29, 76, 11, 8, 4, 67, 21, 13, 33, 9];

const linkedList = new LinkedList();
console.log('isEmpty', linkedList.isEmpty())

elements.forEach(element => linkedList.add(element));

console.log('isEmpty', linkedList.isEmpty())
console.log('isPresent : 23', linkedList.isPresent(23))
console.log('isPresent : 92', linkedList.isPresent(92))
console.log('elementAt : index 5', linkedList.elementAt(5))
console.log('elementAt : index -7', linkedList.elementAt(-7))
console.log('elementAt : index 50', linkedList.elementAt(50))
console.log('print', linkedList.print())
console.log('size', linkedList.size())
console.log('add 62', linkedList.add(62))
console.log('print', linkedList.print())
console.log('remove 17', linkedList.remove(17))
console.log('print', linkedList.print())
console.log('removeAt index 5', linkedList.removeAt(5))
console.log('print', linkedList.print())
console.log('insertAt : 20 at index 5', linkedList.insertAt(20,5))
console.log('print', linkedList.print())