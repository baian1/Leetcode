/**
 * @param {number} x
 * @return {number}
 * 二分查找法
 * 通过除法来判断数在sqrt(x)的左侧还是右侧
 * 这样会有个缺陷，比如99会找到10停止，因为99/9=11，
 * 所以要在最后判断的时候加上-1或者不减
 */
var mySqrt = function (x: number): number {
  let left = 0;
  let right = x;
  let middle = 0;
  while (left < right) {
    middle = Math.floor((left + right) / 2);
    if (Math.floor(x / middle) === middle) {
      return middle;
    } else if (Math.floor(x / middle) > middle) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  if(left*left>x){
    return left-1;
  }
  return left;
};

export {mySqrt};