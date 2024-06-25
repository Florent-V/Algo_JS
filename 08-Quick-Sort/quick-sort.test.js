const quickSort = require('./quick-sort');

test('quickSort should return an array', () => {
  const result = quickSort([4, 2, 3, 1]);
  expect(Array.isArray(result)).toBe(true);
});

test('quickSort should sort an array of numbers in ascending order', () => {
  expect(quickSort([4, 2, 3, 1])).toEqual([1, 2, 3, 4]);
  expect(quickSort([10, 5, 2, 3, 8])).toEqual([2, 3, 5, 8, 10]);
  expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test('quickSort should handle an array with duplicate numbers', () => {
  expect(quickSort([4, 2, 2, 1])).toEqual([1, 2, 2, 4]);
});

test('quickSort should handle an empty array', () => {
  expect(quickSort([])).toEqual([]);
});

test('quickSort should handle an array with one element', () => {
  expect(quickSort([1])).toEqual([1]);
});

test('quickSort should handle an array with all identical elements', () => {
  expect(quickSort([2, 2, 2, 2])).toEqual([2, 2, 2, 2]);
});

test('quickSort should sort an array of numbers in descending order', () => {
  expect(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])).toEqual([1,1,2,2,4,8,32,43,43,55,63,92,123,123,234,345,5643]);
});

