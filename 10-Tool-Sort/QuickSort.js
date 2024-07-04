const Sorter = require('./Sorter');

class QuickSort extends Sorter {
  // Méthode publique pour démarrer le tri
  sort() {
    this.quickSort(0, this.array.length - 1);
    return this.array;
  }

  // Fonction partition plus économe en mémoire
  partition(low, high) {

    const pivot = this.array[high];
    let curseur = low;
  
    for (let i = low; i < high; i++) {
      if (this.array[i] < pivot) {
        this.swap(curseur, i);
        curseur++;
      }
    }
    this.swap(curseur, high);
    return curseur;
  }

  // Fonction récursive pour trier le tableau
  quickSort(low, high) {
    if (low < high) {
      const pi = this.partition(low, high);

      // Trier les éléments avant et après la partition
      this.quickSort(low, pi - 1);
      this.quickSort(pi + 1, high);
    }
  }
}

module.exports = QuickSort;

// Exemple d'utilisation
const array = [5, 2, 9, 1, 5, 6];
const quickSort = new QuickSort(array);
console.log(quickSort.sort());
// Sortie attendue: [1, 2, 5, 5, 6, 9]