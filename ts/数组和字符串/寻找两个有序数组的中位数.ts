/**
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 */
/**
 * 1. 两个数组是有序的,假如我们将其排序为一个数组,那么其中间数就在数组当中
 * 2. 通过分治思想将其每个数组成两部分，将其组合
 * 3. 若数组符合要求
 *    第一个数组的小数部分小于第二个数组的大数部分
 *    第二个数组的小数部分小于第二个数组的大数部分
 *    那么中间数就会在分界线周围的几个数种了
 * 4. 选出靠近中间的数
 *    左部分大的数
 *    右部分小的数
 * 5. 根据总数奇偶返回
 *    奇:右侧最小数
 *    偶:和/2
 * /
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export var findMedianSortedArrays = function (nums1: number[], nums2: number[]) {
  //将小的设为nums1,二分查找数据量减小
  if (nums1.length > nums2.length) {
    let temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }
  //保存长度
  let m = nums1.length;
  let n = nums2.length;

  //二分查找范围
  let iMin = -1;
  let iMax = m - 1;
  while (iMin <= iMax) {
    //i,j为左侧的最大数下标
    let i = Math.floor((iMin + iMax) / 2);
    let j = Math.floor((m + n) / 2 - 2 - i);

    //根据情况处理
    if ((j === -1 || i + 1 === m || nums1[i + 1] >= nums2[j]) && (nums2[j + 1] >= nums1[i] || j + 1 === n || i === -1)) {
      let rightMin = 0;
      if (i + 1 === m) {
        rightMin = nums2[j + 1]
      } else if (j + 1 === n) {
        rightMin = nums1[i + 1]
      } else {
        rightMin = Math.min(nums1[i + 1], nums2[j + 1])
      }
      if ((m + n) % 2 == 1) {
        return rightMin
      }


      let leftMax = 0;
      if (i === -1) {
        leftMax = nums2[j]
      } else if (j === -1) {
        leftMax = nums1[i]
      } else {
        leftMax = Math.max(nums1[i], nums2[j])
      }

      return (rightMin + leftMax) / 2
    }
    if (nums1[i] > nums2[j + 1]) {
      iMax = i - 1;
    } else if (nums2[j] > nums1[i + 1]) {
      iMin = i + 1;
    }
  }
};

/**
 * 暴力解法
 * 将其进行排序,取中间数
 */

export const findMedianSortedArrays2 = (numsA: number[], numsB: number[]) => {
  const arr = [];

  //保存长度
  let m = numsA.length;
  let n = numsB.length;

  let i = 0;
  let j = 0;

  let isOdd = (m + n) % 2 !== 0 ? true : false

  while ((i + j) <= (m + n - 2) / 2 +1) {
    if (numsA[i] === undefined) {
      arr.push(numsB[j])
      j++;
      continue;
    }

    if (numsB[j] === undefined) {
      arr.push(numsA[i]);
      i++;
      continue;
    }

    if (numsA[i] > numsB[j]) {
      arr.push(numsB[j])
      j++;
    } else {
      arr.push(numsA[i]);
      i++;
    }
  }
  if (isOdd) {
    return arr.pop();
  } else {
    return ((arr.pop() as number) + (arr.pop() as number)) / 2
  }
}