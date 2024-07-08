const DoubleLinkedList = require('./DoubleLinkedList');

describe('DoubleLinkedList', () => {
  let list;
  let values;

  beforeEach(() => {
    values = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    list = new DoubleLinkedList();
    values.forEach((value) => list.add(value));
  });

  describe('getHead', () => {
    it('should return the first element of the list', () => {
      expect(list.getHead().data).toEqual(values[0]);
    });
  });

  describe('getTail', () => {
    it('should return the last element of the list', () => {
      expect(list.getTail().data).toEqual(values[values.length - 1]);
    });
  });

  describe('isEmpty', () => {
    it('should return false if the list is not empty', () => {
      expect(list.isEmpty()).toBeFalsy();
    });
  });

  describe('size', () => {
    it('should return the number of elements in the list', () => {
      expect(list.size()).toEqual(values.length);
    });
  });

  describe('print', () => {
    it('should return an array of elements in the list', () => {
      expect(list.print()).toEqual(values);
    });
  });

  describe('printReverse', () => {
    it('should print the elements of the list in reverse order', () => {
      const reversedValues = [...values].reverse();
      const logSpy = jest.spyOn(console, 'log');
      list.printReverse();
      reversedValues.forEach((value, index) => {
        expect(logSpy).toHaveBeenNthCalledWith(index + 1, value);
      });
      logSpy.mockRestore();
    });
  });

  describe('toArrayReverse', () => {
    it('should return an array of elements in the list in reverse order', () => {
      const reversedValues = [...values].reverse();
      expect(list.toArrayReverse()).toEqual(reversedValues);
    });
  });

  describe('add', () => {
    it('should add an element to the end of the list', () => {
      const newValue = Math.floor(Math.random() * 100);
      list.add(newValue);
      expect(list.getTail().data).toEqual(newValue);
    });
  });

  describe('remove', () => {
    it('should remove an element from the list', () => {
      const valueToRemove = values[Math.floor(Math.random() * values.length)];
      list.remove(valueToRemove);
      expect(list.isPresent(valueToRemove)).toEqual(-1);
    });

    it('should not modify the list if the element is not present', () => {
      const valueNotPresent = Math.floor(Math.random() * 100);
      list.remove(valueNotPresent);
      expect(list.print()).toEqual(values);
    });
  });

  describe('isPresent', () => {
    it('should return the index of an element in the list', () => {
      const value = values[Math.floor(Math.random() * values.length)];
      expect(list.isPresent(value)).not.toEqual(-1);
    });

    it('should return -1 if the element is not in the list', () => {
      const valueNotPresent = Math.floor(Math.random() * 100);
      expect(list.isPresent(valueNotPresent)).toEqual(-1);
    });
  });

  describe('elementAt', () => {
    it('should return the element at the specified index', () => {
      const index = Math.floor(Math.random() * values.length);
      expect(list.elementAt(index)).toEqual(values[index]);
    });

    it('should return null if the index is out of bounds', () => {
      const indexOutOfBounds = values.length;
      expect(list.elementAt(indexOutOfBounds)).toEqual(null);
    });
  });

  describe('insertAt', () => {
    it('should insert an element at the specified index', () => {
      const index = Math.floor(Math.random() * (values.length + 1));
      const newValue = Math.floor(Math.random() * 100);
      list.insertAt(newValue, index);
      const expectedValues = [...values];
      expectedValues.splice(index, 0, newValue);
      expect(list.print()).toEqual(expectedValues);
    });
  });
});
