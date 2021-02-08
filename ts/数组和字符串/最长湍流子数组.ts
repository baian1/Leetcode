export function maxTurbulenceSize(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }
  let maxCount = 1;
  let up = false;
  let count = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (up) {
      if (arr[i + 1] > arr[i]) {
        count++;
        up = !up;
      } else if (arr[i + 1] < arr[i]) {
        count = 2;
      } else {
        count = 1;
      }
    } else {
      if (arr[i + 1] > arr[i]) {
        count = 2;
      } else if (arr[i + 1] < arr[i]) {
        count++;
        up = !up;
      } else {
        count = 1;
      }
    }
    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
}
