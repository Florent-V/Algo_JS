class Sorter {
  constructor(array) {
      if (new.target === Sorter) {
          throw new TypeError("Cannot construct Sorter instances directly");
      }
      this.array = array;
  }

  sort() {
      throw new Error('Sort method must be implemented by subclass');
  }

  swap(i, j) {
    let arr = this.array;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

module.exports = Sorter;
