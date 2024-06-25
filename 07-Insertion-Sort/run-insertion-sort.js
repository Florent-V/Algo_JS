const insertionSort = require('./insertion-sort');

const array = [5, 3, 8, 4, 2, 1, 9, 7, 6];
const sortedArray = insertionSort(array);
console.log(sortedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
