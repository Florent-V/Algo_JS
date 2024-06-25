const Sorter = require('./Sorter');

class SelectionSort extends Sorter {
  sort() {
    let { array } = this;
    let n = array.length;

    for (let i = 0; i < n; i++) {
      let min = i;

      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
      }
      if (min !== i) {
        this.swap(i, min);
      }
    }
    return array;
  }
}

module.exports = SelectionSort;

// Exemple d'utilisation
const array = [5, 2, 9, 1, 5, 6];
const selectionSort = new SelectionSort(array);
console.log(selectionSort.sort());
