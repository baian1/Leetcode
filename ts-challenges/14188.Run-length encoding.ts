/* _____________ Your Code Here _____________ */

namespace RLE {
  /**
   * convert
   * - 0|1 to ""
   * - other to `${other}`
   */
  type CountString<T extends number> = T extends 0 | 1 ? "" : `${T}`;

  type BaseEncode<
    T,
    count extends number = 0,
    curChar extends string = "",
    res extends string = ""
  > = T extends `${infer char}${infer other}`
    ? char extends curChar
    ? BaseEncode<other, AddOne<count>, curChar, res>
    : BaseEncode<other, 1, char, `${res}${CountString<count>}${curChar}`>
    : `${res}${CountString<count>}${curChar}`;

  export type Encode<S extends string> = BaseEncode<S>;

  type BaseDecode<
    T,
    Res extends string = ""
  > = T extends `${infer L extends number}${infer Char extends string}${infer other}`
    ? BaseDecode<other, `${Res}${RepateChar<Char, L>}`>
    : T extends `${infer L extends string}${infer other}`
    ? BaseDecode<other, `${Res}${L}`>
    : Res;
  export type Decode<S extends string> = BaseDecode<S>;
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";
import { Join } from "./utils/array";
import type { AddOne } from "./utils/number";
import { RepateChar } from "./utils/string";

type cases = [
  // Raw string -> encoded string
  Expect<Equal<RLE.Encode<"AAABCCXXXXXXY">, "3AB2C6XY">>,

  // Encoded string -> decoded string
  Expect<Equal<RLE.Decode<"3AB2C6XY">, "AAABCCXXXXXXY">>
];
