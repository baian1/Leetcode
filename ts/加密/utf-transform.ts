
//UTF-16转UTF-8
export function utf16ToUtf8(s: string): string {
  if (!s) {
    throw new Error('字符不能为空');
  }

  let code: number;
  let ret: string[] = [];
  const len = s.length;
  for (let i = 0; i < len; i++) {
    code = s.charCodeAt(i);//字符转数字utf-16(js默认字符格式)
    if (code > 0x0 && code <= 0x7f) {
      //单字节
      //UTF-16 0000 - 007F
      //UTF-8  0xxxxxxx
      ret.push(s.charAt(i));
    } else if (code >= 0x80 && code <= 0x7ff) {
      //双字节
      //UTF-16 0080 - 07FF
      //UTF-8  110xxxxx 10xxxxxx
      ret.push(
        //110xxxxx
        String.fromCharCode(0xc0 | ((code >> 6) & 0x1f)),
        //10xxxxxx
        String.fromCharCode(0x80 | (code & 0x3f))
      );
    } else if (code >= 0x800 && code <= 0xffff) {
      //三字节
      //UTF-16 0800 - FFFF
      //UTF-8  1110xxxx 10xxxxxx 10xxxxxx
      ret.push(
        //1110xxxx
        String.fromCharCode(0xe0 | ((code >> 12) & 0xf)),
        //10xxxxxx
        String.fromCharCode(0x80 | ((code >> 6) & 0x3f)),
        //10xxxxxx
        String.fromCharCode(0x80 | (code & 0x3f))
      );
    }
  }

  return ret.join('');
}


//UTF-8转UTF-16
export function utf8ToUtf16(s: string):string {
  if (!s) {
    throw new Error('字符不能为空');
  }

  let codes;
  let bytes;
  let ret: string[] = [];
  const len = s.length;
  for (let i = 0; i < len; i++) {
    codes = [];
    codes.push(s.charCodeAt(i));
    if (((codes[0] >> 7) & 0xff) == 0x0) {
      //单字节  0xxxxxxx
      ret.push(s.charAt(i));
    } else if (((codes[0] >> 5) & 0xff) == 0x6) {
      //双字节  110xxxxx 10xxxxxx
      codes.push(s.charCodeAt(++i));
      bytes = [];
      bytes.push(codes[0] & 0x1f);//0x0001 1111
      bytes.push(codes[1] & 0x3f);//0x0011 1111
      ret.push(String.fromCharCode((bytes[0] << 6) | bytes[1]));
    } else if (((codes[0] >> 4) & 0xff) == 0xe) {
      //三字节  1110xxxx 10xxxxxx 10xxxxxx
      codes.push(s.charCodeAt(++i));
      codes.push(s.charCodeAt(++i));
      bytes = [];
      bytes.push((codes[0] << 4) | ((codes[1] >> 2) & 0xf));
      bytes.push(((codes[1] & 0x3) << 6) | (codes[2] & 0x3f));
      ret.push(String.fromCharCode((bytes[0] << 8) | bytes[1]));
    }
  }
  return ret.join('');
}