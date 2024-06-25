const sym = require('./symmetric-difference');

describe('sym', () => {
  it('should return [3, 4, 5] when passed [1, 2, 3] and [5, 2, 1, 4]', () => {
    expect(sym([1, 2, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);
  });

  it('should return [3, 4, 5] when passed [1, 2, 3, 3] and [5, 2, 1, 4]', () => {
    expect(sym([1, 2, 3, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);
  });

  it('should contain only three elements when passed [1, 2, 3, 3] and [5, 2, 1, 4]', () => {
    const result = sym([1, 2, 3, 3], [5, 2, 1, 4]);
    expect(result.length).toBe(3);
  });

  it('should return [3, 4, 5] when passed [1, 2, 3] and [5, 2, 1, 4, 5]', () => {
    expect(sym([1, 2, 3], [5, 2, 1, 4, 5])).toEqual([3, 4, 5]);
  });

  it('should return [1, 4, 5] when passed [1, 1, 2, 5], [2, 2, 3, 5], and [3, 4, 5, 5]', () => {
    expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).toEqual([1, 4, 5]);
  });

  it('should contain only three elements when passed [1, 1, 2, 5], [2, 2, 3, 5], and [3, 4, 5, 5]', () => {
    const result = sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
    expect(result.length).toBe(3);
  });

  it('should return [2, 3, 4, 6, 7] when passed [3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], and [1, 2, 3]', () => {
    expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])).toEqual([2, 3, 4, 6, 7]);
  });

  it('should return [1, 2, 4, 5, 6, 7, 8, 9] when passed [3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], and [1]', () => {
    expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])).toEqual([1, 2, 4, 5, 6, 7, 8, 9]);
  });

  it('should contain only eight elements when passed [3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], and [1]', () => {
    const result = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
    expect(result.length).toBe(8);
  });
});