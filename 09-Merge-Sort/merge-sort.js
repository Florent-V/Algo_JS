// Fonction pour fusionner deux tableaux triés
function merge(left, right) {
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
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

const test = mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
console.log(test);



module.exports = mergeSort;
