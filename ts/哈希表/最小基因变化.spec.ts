import { expect } from "chai";

function minMutation(start: string, end: string, bank: string[]): number {
  const hashMap = new Map<string, number>();

  function dfs(start: string, end: string, step: number) {
    if (start === end) {
      return;
    }
    // 比较start与每个bank的差距，为1
    for (let cbank of bank) {
      if ((hashMap.get(cbank) ?? Number.MAX_SAFE_INTEGER) < step) {
        continue;
      }
      let diffCount = 0;
      for (let i = 0; i < cbank.length; i++) {
        if (cbank[i] !== start[i]) {
          diffCount++;
        }
      }
      if (diffCount === 1) {
        hashMap.set(cbank, step + 1);
        dfs(cbank, end, step + 1);
      }
    }
  }
  dfs(start, end, 0);
  return hashMap.get(end) ?? -1;
}

describe("最小基因变化", () => {
  it("1", () => {
    expect(minMutation("AACCGGTT", "AACCGGTA", ["AACCGGTA"])).equal(1);
  });
  it("2", () => {
    expect(
      minMutation("AACCGGTT", "AAACGGTA", [
        "AACCGATT",
        "AACCGATA",
        "AAACGATA",
        "AAACGGTA",
      ])
    ).equal(4);
  });
});
