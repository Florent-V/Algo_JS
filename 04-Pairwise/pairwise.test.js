const pairwise = require('./pairwise');

test('should return 11', () => {
  expect(pairwise([1,4,2,3,0,5], 7)).toBe(11);
});

test('should return 1', () => {
  expect(pairwise([1, 3, 2, 4], 4)).toBe(1);
});

test('should return 1', () => {
  expect(pairwise([1, 1, 1], 2)).toBe(1);
});

test('should return 10', () => {
  expect(pairwise([0, 0, 0, 0, 1, 1], 1)).toBe(10);
});

test('should return 0', () => {
  expect(pairwise([], 100)).toBe(0);
});