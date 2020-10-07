import { assert } from "chai";
import { Trie } from "@ts/树/Trie前缀数";

function execMethod(trie: Trie, method: keyof Trie, value: string) {
  // trie;
}

describe("Trie 前缀树", function () {
  let trie = new Trie();

  beforeEach("重置trie", () => {
    trie = new Trie();
  });

  it("测试用例1", () => {
    //["Trie","insert","search","search","startsWith","insert","search"]
    //[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]
    trie.insert("apple");
    assert.equal(trie.search("apple"), true, "");
    assert.equal(trie.search("app"), false, "");
    assert.equal(trie.startsWith("app"), true, "");
    trie.insert("app");
    assert.equal(trie.search("app"), true, "");
  });
  it(`测试用例2`, () => {
    //["Trie","search"]
    //[[],["a"]]
    assert.equal(trie.search("a"), false, "");
  });
});
