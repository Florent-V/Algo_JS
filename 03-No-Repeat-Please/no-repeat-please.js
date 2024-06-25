function arrayPermutation(arr) {
  let perm = [];
  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr];

  for (let i = 0; i < arr.length; i++) {

    const currentLetter = arr[i];

    const remainder = arr.slice(0, i).concat(arr.slice(i + 1));

    const remainingNumsPermuted = arrayPermutation(remainder);

    for (let j = 0; j < remainingNumsPermuted.length; j++) {

      const permutedArray = [currentLetter].concat(remainingNumsPermuted[j]);

      perm.push(permutedArray.join(''));

    }
  }
  return perm;
}


function noRepeatPlease(str) {
  if (str.length === 1) return 1;
  let permutation = arrayPermutation(str.split(''));
  let regex = /(.)\1+/;

  return permutation.filter(el => !el.match(regex)).length;
}

module.exports = noRepeatPlease;
