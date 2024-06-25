const permAlone = require('./no-repeat-please');

test('permAlone("aab") should return a number', () => {
  expect(typeof permAlone("aab")).toBe("number");
});

test('permAlone("aab") should return 2', () => {
  expect(permAlone("aab")).toBe(2);
});

test('permAlone("aaa") should return 0', () => {
  expect(permAlone("aaa")).toBe(0);
});

test('permAlone("aabb") should return 8', () => {
  expect(permAlone("aabb")).toBe(8);
});

test('permAlone("abcdefa") should return 3600', () => {
  expect(permAlone("abcdefa")).toBe(3600);
});

test('permAlone("abfdefa") should return 2640', () => {
  expect(permAlone("abfdefa")).toBe(2640);
});

test('permAlone("zzzzzzzz") should return 0', () => {
  expect(permAlone("zzzzzzzz")).toBe(0);
});

test('permAlone("a") should return 1', () => {
  expect(permAlone("a")).toBe(1);
});

test('permAlone("aaab") should return 0', () => {
  expect(permAlone("aaab")).toBe(0);
});

test('permAlone("aaabb") should return 12', () => {
  expect(permAlone("aaabb")).toBe(12);
});
