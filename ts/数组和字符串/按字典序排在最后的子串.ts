function lastSubstring(s: string): string {
  if (s.length < 2) {
    return s;
  }
  let i = 0;
  let j = 1;
  for (; j < s.length; ) {
    if (s[j] < s[i]) {
      j++;
    } else if (s[j] > s[i]) {
      i = j;
      j++;
    } else {
      let count = 1;
      while (s[j + count] === s[i + count]) {
        count++;
      }
      if (s[j + count] === undefined) {
        return s.slice(i);
      }
      if (s[j + count] > s[i]) {
        i = j + count;
        j = i + 1;
        continue;
      }
      if (s[j + count] > s[i + count]) {
        i = j;
        j++;
      } else {
        j = j + count;
      }
    }
  }
  return s.slice(i, j);
}

export { lastSubstring };
