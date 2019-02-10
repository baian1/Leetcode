/**
 * 
 * 有 N 个房间，开始时你位于 0 号房间。每个房间有不同的号码：0，1，2，...，N-1，并且房间里可能有一些钥匙能使你进入下一个房间。
 * 在形式上，对于每个房间 i 都有一个钥匙列表 rooms[i]，每个钥匙 rooms[i][j] 由 [0,1，...，N-1] 中的一个整数表示，其中 N = rooms.length。 钥匙 rooms[i][j] = v 可以打开编号为 v 的房间。
 * 最初，除 0 号房间外的其余所有房间都被锁住。
 * 你可以自由地在房间之间来回走动。
 * 如果能进入每个房间返回 true，否则返回 false。
 */
/**
 * @param {number[][]} rooms
 * @return {boolean}
 * bfs
 * 优化:记录钥匙个数，直接和房间数比较
 */
var canVisitAllRooms = function (rooms: number[][]): boolean {
  let hasRoomKey = Array(rooms.length).fill(false);
  hasRoomKey[0] = true;
  let keyQuene = [...rooms[0]];
  let countkey = 1;
  while (keyQuene.length !== 0) {
    let key = <number>keyQuene.shift();
    if (hasRoomKey[key] === true) {
      continue;
    }
    hasRoomKey[key] = true;
    countkey++;
    let getkeyslist = rooms[key];
    for (let newkey of getkeyslist) {
      keyQuene.push(newkey);
    }
  }
  return countkey === rooms.length;
};

/**
 * @param {number[][]} rooms
 * @return {boolean}
 * dfs
 * 进房间的时候，把钥匙改为true
 */
var canVisitAllRooms2 = function (rooms: number[][]): boolean {
  let hasRoomKey: boolean[] = [];
  hasRoomKey[0] = true;
  let count = 1;
  const dfs = function (roomkeys: number[]) {
    for (let i of roomkeys) {
      if (hasRoomKey[i] === undefined) {
        hasRoomKey[i] = true;
        count++;
        dfs(rooms[i]);
      }
    }
  }
  dfs(rooms[0]);
  return count === rooms.length;
}

export { canVisitAllRooms2 as canVisitAllRooms };