/**
 * 208. 实现 Trie (前缀树)
 */
class Trie {
    constructor() {

    }

    insert(word: string): void {

    }

    search(word: string): boolean {

    }

    startsWith(prefix: string): boolean {

    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
let trie = new Trie();

asserts(trie.insert("apple"));
trie.search("apple");   // 返回 true
trie.search("app");     // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");   
trie.search("app");     // 返回 true