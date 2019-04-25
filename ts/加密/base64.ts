export class Base64 {
  static readonly _table: string[] = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'
  ];

  static encode(str: string) {
    const length = str.length;
    const un: number = str.length % 3;
    let code: number[] = [];

    const mergeToCode = (merge: number) => {
      code.push(merge >> 18 & 0x3F);
      code.push(merge >> 12 & 0x3F);
      code.push(merge >> 6 & 0x3F);
      code.push(merge & 0x3F);
    }

    for (let i = 2; i < length - un; i += 3) {
      let merge = str[i - 2].charCodeAt(0) << 16;
      merge |= str[i - 1].charCodeAt(0) << 8;
      merge |= str[i].charCodeAt(0);
      mergeToCode(merge);
    }
    if (un !== 0) {
      let merge = 0;
      switch (un) {
        case 1:
          merge = str[length - 1].charCodeAt(0) << 16;
          break;
        case 2:
          merge = str[length - 1].charCodeAt(0) << 16;
          merge |= str[length - 1].charCodeAt(0) << 8;
          break;
        default:
          break;
      }
      mergeToCode(merge);
    }

    let codeToStr = code.map((item) => this._table[item]);
    if (un === 2) {
      codeToStr.push('=');
    }
    if (un === 1) {
      codeToStr.push('==');
    }
    return codeToStr.join('');
  }

  static decode(str: string) {
    let code = [];
    const length = str.length;
    let i = 0;
    let times = 0;//计算字符个数
    let equalTimes = 0;//计算等号个数
    let merge: number = 0;//合并四个字符
    while (i < length) {
      const char = str[i];
      i++;
      const index = this._table.indexOf(char);
      if (index === -1) {
        switch (char) {
          case '=':
            times++;
            equalTimes++;
            continue;
          case ' ':
          case '\n':
          case '\r':
          case '\t':
            continue;
          default:
            throw new Error(`Base64无效编码:${char}`)
        }
      } else {
        times++;
        merge = merge << 6 | (index & 0x3f);
      }
      if (times === 4) {
        code.push(merge >> 16 & 0xff);
        code.push(merge >> 8 & 0xff);
        code.push(merge & 0xff);
        times = 0;
        merge = 0;
      }
    }

    const newstr = code.map((item) => String.fromCharCode(item)).join('');
    return newstr.slice(0, newstr.length - equalTimes);
  }
}