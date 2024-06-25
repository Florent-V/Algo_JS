// Version peu optimisée de quickSort du fait de la création de nouveaux tableaux à chaque appel récursif

function quickSortBase(array) {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[array.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}


function partition(array, low, high) {

  const pivot = array[high];
  let curseur = low;

  for (let i = low; i < high; i++) {
    if (array[i] < pivot) {
      [array[curseur], array[i]] = [array[i], array[curseur]];
      curseur++;
    }
  }
  [array[curseur], array[high]] = [array[high], array[curseur]];
  return curseur;
}

function quickSortOptimized(array, low, high) {
  if (low < high) {
    const curseur = partition(array, low, high);
    quickSortOptimized(array, low, curseur - 1);
    quickSortOptimized(array, curseur + 1, high);
  }
  return array;
}

function quickSort(array) {
  return quickSortOptimized(array, 0, array.length - 1);
}


module.exports = quickSort;
