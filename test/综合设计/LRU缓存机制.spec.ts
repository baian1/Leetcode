import { assert } from "chai";
import { LRUCache3 } from "@ts/综合设计/LRU缓存机制";

describe("LRUCache3", function () {
  it("first", () => {
    let lruCache: LRUCache3 = new LRUCache3(0);
    const operation = [
      "LRUCache",
      "put",
      "put",
      "get",
      "put",
      "get",
      "put",
      "get",
      "get",
      "get",
    ];
    const data = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]];
    const res = [null, null, null, 1, null, -1, null, -1, 3, 4];
    operation.forEach((v, index) => {
      switch (v) {
        case "LRUCache": {
          lruCache = new LRUCache3(data[index][0]);
          break;
        }
        case "put": {
          lruCache.put(data[index][0], data[index][1]);
          break;
        }
        case "get": {
          const v = lruCache.get(data[index][0]);
          assert(v === res[index], `${index}:${v} !== ${res[index]}`);
          break;
        }
        default: {
          throw new Error("未知操作");
        }
      }
    });
  });
});
