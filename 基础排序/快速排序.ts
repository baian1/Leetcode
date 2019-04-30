/**
 * 
 * @param nums 
 * @param left 
 * @param right 
 * 基础快排
 * Partition
 * 使用两个指针,
 * i用来遍历
 * j用来记录小于等于key的数
 */
const swap = (num: number[], i: number, j: number) => {
  let temp = num[i];
  num[i] = num[j];
  num[j] = temp;
}

export const sortKuaipai = function (nums: number[], left: number, right: number) {
  if (left >= right) {
    return;
  }
  swap(nums, left, Math.floor(Math.random() * (right - left + 1) + left));//随机快排

  const key = nums[left];
  let j = left;
  for (let i = left + 1; i <= right; i++) {
    if (nums[i] < key) {
      j++;
      swap(nums, j, i);
    }
  }
  swap(nums, left, j);
  sortKuaipai(nums, left, j - 1);
  sortKuaipai(nums, j + 1, right);
}

/**
 * 
 * @param nums 
 * @param left 
 * @param right 
 * 双路快排
 * 设置两个Partition
 * 用i表示<key
 * j表示>key
 */
export const sortKuaipai2 = function (nums: number[], left: number, right: number) {
  if (left >= right) {
    return;
  }
  swap(nums, left, Math.floor(Math.random() * (right - left + 1) + left));//随机快排

  let i = left;
  let j = right;
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
  sortKuaipai2(nums, left, i - 1);
  sortKuaipai2(nums, i + 1, right);
}