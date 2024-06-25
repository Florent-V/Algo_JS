const Sorter = require('./Sorter');

class InsertionSort extends Sorter {
  sort() {
    let { array } = this;
    let n = array.length;
    let i = 1;

    while (i < array.length) {
      let j = i;
      while (j > 0 && array[j] < array[j - 1]) {
        [array[j], array[j-1]] =[array[j-1], array[j]];
        j--;
      };
      i++;
    };
    return array;
  }
}

module.exports = InsertionSort;

// Exemple d'utilisation
const array = [5, 2, 9, 1, 5, 6];
const insertionSort = new InsertionSort(array);
console.log(insertionSort.sort());
