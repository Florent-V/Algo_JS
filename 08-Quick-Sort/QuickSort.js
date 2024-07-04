class QuickSort {
  constructor(array) {
    this.array = array;
  }

  // Fonction pour échanger deux éléments dans le tableau
  swap(i, j) {
    [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
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

  // Méthode publique pour démarrer le tri
  run() {
    this.quickSort(0, this.array.length - 1);
    return this.array;
  }
}

// Utilisation de la classe QuickSort
const array = [10, 7, 8, 9, 1, 5];
const array2 = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92];
const quickSorter = new QuickSort(array2);
console.log('Tableau trié:', quickSorter.run());
