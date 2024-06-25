function pairwise(arr, arg) {

  let total = 0;
  let usedIndexes = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        
        if (arr[i] + arr[j] === arg && !usedIndexes.includes(i) && !usedIndexes.includes(j)) {
          total += i + j;
          usedIndexes.push(i, j);
        }

    }
  }
  return total;
}

module.exports = pairwise;
