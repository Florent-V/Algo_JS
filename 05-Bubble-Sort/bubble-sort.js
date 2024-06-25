function bubbleSort(array) {
  // Only change code below this line
  const len = array.length;
  let swapped;
  count = 0;

  for (let i = 0; i < len; i++) {
    swapped = false;

    for (let j = 0; j < len - i - 1; j++) {
      count++;
      if (array[j] > array[j+1]) {
        [array[j], array[j+1]] =[array[j+1], array[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  // console.log('count', count);
  return array;
  // Only change code above this line
}

function bubbleSort2(array) {
  let len = array.length;
  let swapped;
  count = 0;
  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      count++;
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  // console.log('count', count);
  return array;
}

module.exports = bubbleSort;
