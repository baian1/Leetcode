const sortKuaipai = function (nums: number[], left: number, right: number) {
  if (left >= right) {
    return;
  }
  let i=left;
  let j=right;
  let key = nums[i];
  while (i < j) {
    while (key <= nums[j] && i < j) {
      j--;
    }
    nums[i] = nums[j];
    while (key >= nums[i] && i < j) {
      i++;
    }
    nums[j] = nums[i];
  }
  nums[i] = key;
  sortKuaipai(nums, left, i -1);
  sortKuaipai(nums, i + 1, right);
}

sortKuaipai([4, 2, 5, 3, 6, 7, 3, 5, 7, 8], 0, 9);