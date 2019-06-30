/**
 * 2瓶换1酒
 * 4盖换1酒
 */

export const maxWine = (wineNumber: number) => {
  let bottle = 0;
  let cap = 0;
  let wine = wineNumber;
  let count = 0;
  do {
    wine = wine + Math.floor(bottle / 2) + Math.floor(cap / 4);
    bottle %= 2;
    cap %= 4;
    count += wine;
    bottle += wine;
    cap += wine;
    wine = 0;
  } while (bottle > 1 || cap > 3)

  if (bottle === 0 && cap === 3) {
    count += 1;
  } else if (bottle === 1) {
    if (cap === 3) {
      count += 2;
    } else {
      count += 1;
    }
  }
  return count;
}