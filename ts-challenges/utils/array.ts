import { Equal, Expect } from "@type-challenges/utils";

export type Join<arr extends (string | number)[], Res extends string = ""> = arr extends [infer L extends string | number, ...infer R extends (string | number)[]] ? Join<R, `${Res}${L}`> : Res

namespace test {
  type cases = [
    // Raw string -> encoded string
    Expect<Equal<Join<['a', 'b', 'c']>, 'abc'>>,
    Expect<Equal<Join<['a', '1', 'c']>, 'a1c'>>,
  ];
}