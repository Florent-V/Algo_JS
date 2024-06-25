const bubbleSort = require('./bubble-sort');

test('bubbleSort should return an array', () => {
  const result = bubbleSort([4, 2, 3, 1]);
  expect(Array.isArray(result)).toBe(true);
});

test('bubbleSort should sort an array of numbers in ascending order', () => {
  expect(bubbleSort([4, 2, 3, 1])).toEqual([1, 2, 3, 4]);
  expect(bubbleSort([10, 5, 2, 3, 8])).toEqual([2, 3, 5, 8, 10]);
  expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test('bubbleSort should handle an array with duplicate numbers', () => {
  expect(bubbleSort([4, 2, 2, 1])).toEqual([1, 2, 2, 4]);
});

test('bubbleSort should handle an empty array', () => {
  expect(bubbleSort([])).toEqual([]);
});

test('bubbleSort should handle an array with one element', () => {
  expect(bubbleSort([1])).toEqual([1]);
});

test('bubbleSort should handle an array with all identical elements', () => {
  expect(bubbleSort([2, 2, 2, 2])).toEqual([2, 2, 2, 2]);
});
