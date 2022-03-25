import { expect } from "chai";

function lengthOfLongestSubstring(s: string): number {
  let start = 0;
  let end = 0;
  let hash: Map<string, number> = new Map();
  let max_length = 0;
  for (; end < s.length; end++) {
    let char = s[end];
    let c_index = hash.get(char);
    if (c_index !== undefined && c_index >= start) {
      max_length = Math.max(max_length, end - start);
      start = c_index + 1;
    }
    hash.set(char, end);
  }
  max_length = Math.max(max_length, end - start);

  return max_length;
}

it("最长不含重复字符的子字符串", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).equal(3);
});
it("最长不含重复字符的子字符串2", () => {
  expect(lengthOfLongestSubstring(" ")).equal(1);
});
it("最长不含重复字符的子字符串3", () => {
  expect(lengthOfLongestSubstring("abba")).equal(2);
});
