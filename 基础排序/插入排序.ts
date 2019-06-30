/**
 * 插入排序
 * j用来遍历已完成排序数组，决定其插入位置
 * i用来遍历数组
 * @param nums 
 */
function insertion_sort(nums: number[]) {
  var i, j;
  for (i = 1; i < nums.length; i++) {
    for (j = 0; j < i; j++) {
      if (nums[j] > nums[i]) {
        nums.splice(j, 0, nums[i]);
        nums.splice(i + 1, 1);
        break;
      }
    }
  }
  return nums;
};