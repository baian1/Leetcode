/**
 * 散列节点，用于冲突项
 */
class hashNode {
  next: hashNode | null;
  constructor(public name: string, public desc: string) {
    this.next = null;
  }
}

/**
 * 定义哈希表长度
 */
const HASHSIZE = 2;

/**
 * 构建哈希表
 */
interface hashInterface {
  /**
   * 返回哈希表index
   * @param str 
   */
  hash(str: string): number;
  /**
   * 寻找对应index节点中符合name
   * @param str 
   */
  lookup(str: string): null | hashNode;
  /**
   * //寻找哈希表中对应项
   * @param str 
   */
  get(str: string): string | null;
  /**
   * 添加项
   * @param name 
   * @param desc 
   */
  install(name: string, desc: string): number;
  /**
   * 展示所有项
   */
  displayTable(): string;
  /**
   * 清空表
   */
  clearup(): void;
}

export class hashMap implements hashInterface {
  #hashTab: (null | hashNode)[];
  constructor() {
    this.#hashTab = Array(HASHSIZE).fill(null);
  }

  hash(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
    }
    return hash % HASHSIZE;
  }

  lookup(str: string) {
    let index = this.hash(str);
    let node: null | hashNode = this.#hashTab[index];
    while (node !== null) {
      if (node.name === str) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  get(str: string) {
    let node = this.lookup(str);
    if (node !== null) {
      return node.desc;
    } else {
      return null;
    }
  }

  install(name: string, desc: string) {
    if (name === null) {
      return 0;
    }
    let node = this.lookup(name);
    if (node === null) {
      let index = this.hash(name);
      let newNode = new hashNode(name, desc);
      newNode.next = this.#hashTab[index];
      this.#hashTab[index] = newNode;
    } else {
      node.desc = desc;
    }
    return 1;
  }

  displayTable() {
    let index = 0;
    let res = '';
    while (index < HASHSIZE) {
      if (this.#hashTab[index] === null) {
        res += '()\n'
      } else {
        let node = this.#hashTab[index];
        while (node !== null) {
          res += `(${node.name},${node.desc})\n`;
          node = node.next;
        }
      }
      index++;
    }
    return res;
  }

  clearup() {
    let index = 0;
    for (index; index < HASHSIZE; index++) {
      if (this.#hashTab[index] !== null) {
        this.#hashTab[index] = null;
      }
    }
  }
}