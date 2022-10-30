import type { Equal, Expect } from "@type-challenges/utils";
import { AND, IF } from "./condition";
import { Ordering } from "./common";
import { GetFirstChar, RemoveFirstChar, StringLength } from "./string";

export type AddOne<T extends number> = [
  ...N2Arr<T>,
  unknown
]["length"] extends infer A extends number
  ? A
  : never;
type SubOne<T extends number> = N2Arr<T> extends [infer L, ...infer Other]
  ? Other["length"]
  : never;

SubOneTest: {
  type cases = [Expect<Equal<SubOne<99>, 98>>];
}

type N2Arr<T, arr extends unknown[] = []> = arr["length"] extends T
  ? arr
  : N2Arr<T, [...arr, unknown]>;

/**
 * 字符串转数字
 */
export type StringToNumber<A extends string> =
  A extends `${infer N extends number}` ? N : never;
StringToNumberTest: {
  type cases = [
    Expect<Equal<StringToNumber<"99">, 99>>,
    Expect<Equal<StringToNumber<"0">, 0>>,
    Expect<Equal<StringToNumber<"-2">, -2>>,
    Expect<Equal<StringToNumber<"">, never>>
  ];
}

/**
 * 十位以内的比较
 */
type _Compare<A extends number, B extends number> = A extends 0
  ? B extends 0
    ? Ordering.Equal
    : Ordering.Less
  : B extends 0
  ? Ordering.Greater
  : _Compare<SubOne<A>, SubOne<B>>;

_CompareTest: {
  type cases = [
    Expect<Equal<_Compare<10, 20>, Ordering.Less>>,
    Expect<Equal<_Compare<10, 10>, Ordering.Equal>>,
    Expect<Equal<_Compare<10, 0>, Ordering.Greater>>
  ];
}

type GetFirstNum<N extends number> = StringToNumber<GetFirstChar<`${N}`>>;
GetFirstNumTest: {
  type cases = [Expect<Equal<GetFirstNum<3123>, 3>>];
}
/**
 * 限定正整数和0
 */
export type More<
  A extends number,
  B extends number,
  AF extends number = GetFirstNum<A>,
  BF extends number = GetFirstNum<B>,
  AL extends number = StringLength<`${A}`>,
  BL extends number = StringLength<`${B}`>,
  C extends Ordering = _Compare<AL, BL>,
  C2 extends Ordering = _Compare<AF, BF>
> = C extends Ordering.Equal
  ? C2 extends Ordering.Equal
    ? RemoveFirstChar<`${A}`> extends ""
      ? Ordering.Equal
      : More<
          StringToNumber<RemoveFirstChar<`${A}`>>,
          StringToNumber<RemoveFirstChar<`${B}`>>
        >
    : C2
  : C;

MoreTest: {
  type cases = [
    Expect<Equal<More<222, 121>, Ordering.Greater>>,
    Expect<Equal<More<222, 223>, Ordering.Less>>,
    Expect<Equal<More<222, 221>, Ordering.Greater>>,
    Expect<Equal<More<2222, 121>, Ordering.Greater>>,
    Expect<Equal<More<22, 22>, Ordering.Equal>>,
    Expect<Equal<More<222, 2122>, Ordering.Less>>
  ];
}
