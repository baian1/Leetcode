import { expect } from "chai";

function findDuplicate(nums: number[]): number {
  // 把数组看成指针,一直做运动
  let slow = 0;
  let fast = 0;

  while (Number.isInteger(slow) && Number.isInteger(fast)) {
    // 走一步
    slow = nums[slow];
    // 走两步
    fast = nums[nums[fast]];

    if (slow === fast) {
      break;
    }
  }

  slow = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}

describe("寻找重复数", () => {
  it("1", () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).equal(2);
  });
  it("2", () => {
    expect(findDuplicate([2, 5, 9, 6, 9, 3, 8, 9, 7, 1])).equal(9);
  });
});
