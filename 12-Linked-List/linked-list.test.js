const LinkedList = require('./LinkedList');

describe('LinkedList', () => {
  let list;
  let values;

  beforeEach(() => {
    values = [10, 5, 20, 2, 7, 15, 30];
    list = new LinkedList();
    values.forEach((value) => list.add(value));
  });

  describe('size', () => {
    it('should return the size of the list', () => {
      expect(list.size()).toBe(7);
    });
  });

  describe('gethead', () => {
    it('should return the head of the list', () => {
      expect(list.gethead().element).toBe(10);
    });
  });

  describe('isEmpty', () => {
    it('should return false for a non-empty list', () => {
      expect(list.isEmpty()).toBeFalsy();
    });
  });

  describe('print', () => {
    it('should return an array of elements in the list', () => {
      expect(list.print()).toEqual(values);
    });
  });

  describe('add', () => {
    it('should add an element to the end of the list', () => {
      list.add(40);
      expect(list.print()).toEqual([...values, 40]);
    });
  });

  describe('remove', () => {
    it('should remove an element from the list', () => {
      list.remove(5);
      expect(list.print()).toEqual([10, 20, 2, 7, 15, 30]);
    });

    it('should not modify the list if the element is not present', () => {
      list.remove(100);
      expect(list.print()).toEqual(values);
    });
  });

  describe('removeAt', () => {
    it('should remove an element at the specified index', () => {
      list.removeAt(2);
      expect(list.print()).toEqual([10, 5, 2, 7, 15, 30]);
    });

    it('should not modify the list if the index is out of bounds', () => {
      list.removeAt(10);
      expect(list.print()).toEqual(values);
    });
  });

  describe('isPresent', () => {
    it('should return the index of the element in the list', () => {
      expect(list.isPresent(5)).toBe(1);
    });

    it('should return -1 if the element is not in the list', () => {
      expect(list.isPresent(100)).toBe(-1);
    });
  });

  describe('elementAt', () => {
    it('should return the element at the specified index', () => {
      expect(list.elementAt(3)).toBe(2);
    });

    it('should return null if the index is out of bounds', () => {
      expect(list.elementAt(10)).toBeNull();
    });
  });

  describe('insertAt', () => {
    it('should insert an element at the specified index', () => {
      list.insertAt(25, 3);
      expect(list.print()).toEqual([10, 5, 20, 25, 2, 7, 15, 30]);
    });

    it('should not modify the list if the index is out of bounds', () => {
      list.insertAt(25, 10);
      expect(list.print()).toEqual(values);
    });
  });
});
