class TrieTreeNode {
  value: string;
  isEnd: boolean;
  children: { [char: string]: TrieTreeNode | undefined };
  constructor(value: string) {
    this.value = value;
    this.isEnd = false;
    this.children = {};
  }
}

/**
 * 208. 实现 Trie (前缀树)
 */
export class Trie {
  root: TrieTreeNode;
  constructor() {
    this.root = new TrieTreeNode("");
  }

  insert(word: string): void {
    let node: TrieTreeNode | undefined = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!Reflect.get(node.children, char)) {
        const newNode = new TrieTreeNode(char);
        node.children[char] = newNode;
      }
      node = node.children[char];
      if (node === undefined) {
        throw new Error("前缀树节点创建失败");
      }
      if (i === word.length - 1) {
        node.isEnd = true;
      }
    }
  }

  private findEndNode(word: string) {
    let node: TrieTreeNode | undefined = this.root;
    for (let char of word) {
      if (node === undefined) {
        break;
      }
      node = node.children[char];
    }
    return node;
  }

  search(word: string): boolean {
    const node = this.findEndNode(word);
    return node !== undefined && node.isEnd === true;
  }

  startsWith(prefix: string): boolean {
    const node = this.findEndNode(prefix);
    return node !== undefined;
  }
}
