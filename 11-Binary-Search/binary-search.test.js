const binarySearch = require('./binary-search');

test('binarySearch should return the index of the target element', () => {
  const arr = [
    12, 14, 16, 20, 22,
    24, 32, 35, 41, 45,
    53, 54, 63, 67, 71,
    78, 87, 88, 91, 99
  ];
  const target = 88;
  expect(binarySearch(arr, target)).toBe(17);
});

test('binarySearch should return -1 if the target element is not in the array', () => {

  const arr = [
    12, 14, 16, 20, 22,
    24, 32, 35, 41, 45,
    53, 54, 63, 67, 71,
    78, 87, 88, 91, 99
  ];

  const target = 100;

  expect(binarySearch(arr, target)).toBe(-1);
});

test('binarySearch should return -1 if the array is empty', () => {
  const arr = [];
  const target = 100;
  expect(binarySearch(arr, target)).toBe(-1);
});