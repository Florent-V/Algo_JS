class MergeSort {
  constructor(array) {
      this.array = array;
  }

  mergeSort(array) {
      if (array.length <= 1) {
          return array;
      }

      const middle = Math.floor(array.length / 2);
      const left = array.slice(0, middle);
      const right = array.slice(middle);

      return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  merge(left, right) {
      let result = [];
      let leftIndex = 0;
      let rightIndex = 0;

      while (leftIndex < left.length && rightIndex < right.length) {
          if (left[leftIndex] < right[rightIndex]) {
              result.push(left[leftIndex]);
              leftIndex++;
          } else {
              result.push(right[rightIndex]);
              rightIndex++;
          }
      }

      // Ajouter les éléments restants
      return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  run() {
    this.array = this.mergeSort(this.array);
    return this.array;
}
}

// Exemple d'utilisation
const array = [5, 2, 9, 1, 5, 6];
const mergeSort = new MergeSort(array);
console.log(mergeSort.sort());
