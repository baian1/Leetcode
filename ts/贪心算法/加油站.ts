/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas: number[], cost: number[]): number {
  const length = gas.length;
  if (length === 1) {
    if (gas[0] >= cost[0]) {
      return 0;
    } else {
      return -1;
    }
  }
  let list = [];//这站补油到达下一站的油量结余
  let i = 0;
  for (i; i < gas.length; i++) {
    list[i] = gas[i] - cost[i];
  }
  let start = 0;
  let end = 1;
  let surplus = list[start];
  while (start !== end) {
    if (surplus >= 0) {
      surplus += list[end];
      end = (end + 1) % length;
    } else {
      start--;
      if (start === -1) {
        start = length - 1;
      }
      surplus += list[start];
    }
  }
  if (surplus < 0) {
    return -1;
  } else {
    return start;
  }
};

export { canCompleteCircuit };