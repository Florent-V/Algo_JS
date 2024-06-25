
const Sorter = require('./Sorter');

class BubbleSort extends Sorter {
  sort() {
    let n = this.array.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
      swapped = false;

      for (let j = 0; j < n - i - 1; j++) {
        if (this.array[j] > this.array[j + 1]) {
          this.swap(j, j + 1);
          swapped = true;
        }
      }
      if (!swapped) {
        break;
      }
    }
    return this.array;
  }
};

module.exports = BubbleSort;

// Exemple d'utilisation
const array = [5, 2, 9, 1, 5, 6];
const bubbleSort = new BubbleSort(array);
console.log(bubbleSort.sort());