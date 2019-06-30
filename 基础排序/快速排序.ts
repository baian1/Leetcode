/**
 * 
 * @param nums 
 * @param left 
 * @param right 
 * 基础快排
 * Partition
 * 使用两个指针,
 * i用来遍历
 * j用来记录小于等于key的数的index
 * 
 * 1. 完成遍历后获得j，表示小于key的所有数的最后一个位置
 * 2. 将位置j与作为key的数交换，获得小于j位置的数小于key，大于j位置的数大于key
 * 3. 使用分治法继续进行左侧与右侧数的排序
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
  return nums;
}

/**
 * 
 * @param nums 
 * @param left 
 * @param right 
 * 双路快排(三向切分)
 * 用来解决有大量重复元素的数组
 * 
 * 设置两个Partition
 * 用i表示<key
 * j表示>key
 */
export const sortKuaipai2 = function (nums: number[], left: number, right: number) {
  if (left >= right) {
    return;
  }
  //swap(nums, left, Math.floor(Math.random() * (right - left + 1) + left));//随机快排
  let m = median3(arr, left, left + right / 2, right);//三取样切分
  swap(nums, left, m);

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

/**
 * 三取样切分
 * 选择切分元素：取 arr[i]  arr[j]   arr[k]  三个元素值的中间元素的下标
 */

function median3(arr: number[], i: number, j: number, k: number) {
  if (arr[i] > arr[j]) {
    if (arr[i] <= arr[k]) {
      return i;
    } else if (arr[j] >= arr[k]) {
      return k;
    } else {
      return j;
    }
  } else {
    if (arr[j] <= arr[k]) {
      return j;
    } else if (arr[i] <= arr[k]) {
      return i;
    } else {
      return k;
    }
  }
}