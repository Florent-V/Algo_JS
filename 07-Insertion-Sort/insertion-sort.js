function insertionSort(array) {

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

module.exports = insertionSort;
