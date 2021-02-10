function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) {
    return false;
  }
  const charCount: number[] = new Array(26).fill(0);
  for (let char of s1) {
    const index = char.charCodeAt(0) - 97;
    charCount[index]++;
  }
  for (let i = 0; i < s1.length; i++) {
    const index = s2[i].charCodeAt(0) - 97;
    charCount[index]--;
  }
  if (charCount.every((e) => !e)) return true;
  let i = 0;
  let j = s1.length;
  for (; j < s2.length; i++, j++) {
    const startCharIndex = s2[i].charCodeAt(0) - 97;
    charCount[startCharIndex]++;
    const endCharIndex = s2[j].charCodeAt(0) - 97;
    charCount[endCharIndex]--;
    if (charCount.every((e) => !e)) return true;
  }
  return false;
}

export { checkInclusion };
