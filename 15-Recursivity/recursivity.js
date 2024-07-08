const values = [30, 20, 40, 15, 25, 35, 45, 10, 18, 22, 28, 32, 38, 42, 48, 5, 12, 16, 24, 26, 31, 34, 39, 41, 46, 49, 3, 8, 14, 21];


function arraySum(array, n=array.length) {
  if (n === 0) {
    return 0;
  }
  return array[n-1] + arraySum(array, n-1)
}

console.log(arraySum(values))

const stringToreverse = 'Hello World!';

function reverseString(string, index= string.length) {
  if (index === 0) {
    return '';
  }
  return string[index - 1] + reverseString(string, index-1)
}

function fibo(n, a=0, b=1) {
  if (0 === n) {
    return "";
  }
  return a + " " + fibo(n-1, b, a+b)
}

console.log(fibo(10))

function reverse_fibo(n, a = 0, b = 1, result = []) {
  if (n > 0) {
    reverse_fibo(n-1, b, a+b, result)
    result.push(a)
  }
  
  return result.join(" ")
}

console.log(reverse_fibo(10))