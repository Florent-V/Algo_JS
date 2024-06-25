const quickSort = require('./quick-sort');


// const array = [6, 7, 3, 4, 8, 1, 5];
// const array = [5, 4, 33, 2, 8];
// const array = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]

const array = [10, 5, 2, 3, 8];

console.log(quickSort(array));
//console.log([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92].sort((a, b) => a - b));

const sortedArray = [
  1,    1,   2,   2,   4,
  8,   32,  43,  43,  55,
 63,   92, 123, 123, 234,
345, 5643
]