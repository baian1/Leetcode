function isCharSumArrEqual(arr1: number[], arr2: number[]) {
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) {
    return false;
  }
  const s1CharSum: number[] = new Array(26).fill(0);
  for (let char of s1) {
    const index = char.charCodeAt(0) - 97;
    s1CharSum[index]++;
  }
  let s2SubCharSum: number[] = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    const index = s2[i].charCodeAt(0) - 97;
    s2SubCharSum[index]++;
  }
  if (isCharSumArrEqual(s2SubCharSum, s1CharSum)) {
    return true;
  }
  let i = 0;
  let j = s1.length;
  for (; j < s2.length; i++, j++) {
    const startCharIndex = s2[i].charCodeAt(0) - 97;
    s2SubCharSum[startCharIndex]--;
    const endCharIndex = s2[j].charCodeAt(0) - 97;
    s2SubCharSum[endCharIndex]++;
    if (isCharSumArrEqual(s2SubCharSum, s1CharSum)) {
      return true;
    }
  }
  return false;
}

export { checkInclusion };
