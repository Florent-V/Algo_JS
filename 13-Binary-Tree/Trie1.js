var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

class Node {
  constructor() {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function() {
      this.end = true;
    };
    this.isEnd = function() {
      return this.end;
    };
  }
};

class Trie {
  constructor() {
    this.root = new Node();
    this.words = [];
  }

  add(word, root=this.root) {
    if (!word) return;
    if (Object.keys(root.keys).includes(word[0])) {
      let letter = word[0];
      this.add(word.substring(1), root.keys[letter])
    } else {
      const node = new Node();
      let letter = word[0];
      root.keys[letter] = node;

      if (word.length === 1) {
            node.setEnd();
      }
      this.add(word.substring(1), root.keys[letter]);
    }
  }; 

  print() {
    this.findWord(this.root, "");
    return this.words;
  }

  findWord(root, word) {
      if (Object.keys(root.keys).length != 0) {
        for (let letter of Object.keys(root.keys)) {
          this.findWord(root.keys[letter], word + letter);
        }
        if (root.isEnd()) {
          this.words.push(word);
        }
      } else {
        word.length > 0 ? this.words.push(word) : undefined;
        return;
      }
  }

  isWord(word, root=this.root) {
      let letter = word[0];
      if (Object.keys(root.keys).includes(letter)) {
        if (word.length === 1 && !root.keys[letter].isEnd()) return false;
        if (word.length === 1 && root.keys[letter].isEnd()) return true;
        return this.isWord(word.substring(1), root.keys[letter])
      } else {
        return false;
      }
  }
};

const trie = new Trie();
trie.add('ball');
trie.add('bat');
trie.add('doll');

console.log(trie.isWord('ball')); // should return true
console.log(trie.isWord('bat')); // should return true
console.log(trie.isWord('doll')); // should return true
console.log(trie.isWord('batman')); // should return false
console.log(trie.print()); // should return false