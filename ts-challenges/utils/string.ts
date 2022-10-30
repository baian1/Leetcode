import { Equal, Expect } from "@type-challenges/utils";
import { Join } from "./array";

export type RepateChar<
  char extends string,
  count extends number = 0,
  arr extends string[] = []
> = arr["length"] extends count
  ? Join<arr>
  : RepateChar<char, count, [...arr, char]>;

RepateCharTest: {
  type cases = [
    // Raw string -> encoded string
    Expect<Equal<RepateChar<"a", 5>, "aaaaa">>
  ];
}

export type StringLength<
  S,
  cur extends unknown[] = []
> = S extends `${infer L}${infer R}`
  ? R extends ""
    ? [...cur, unknown]["length"]
    : StringLength<R, [...cur, unknown]>
  : never;
StringLengthTest: {
  type cases = [
    // Raw string -> encoded string
    Expect<Equal<StringLength<"a">, 1>>,
    Expect<Equal<StringLength<"abc">, 3>>
  ];
}

export type GetFirstChar<S extends string> = S extends `${infer R}${infer L}`
  ? R
  : never;
GetFirstCharTest: {
  type cases = [
    // Raw string -> encoded string
    Expect<Equal<GetFirstChar<"a">, "a">>,
    Expect<Equal<GetFirstChar<"abc">, "a">>
  ];
}
export type RemoveFirstChar<S extends string> = S extends `${infer R}${infer L}`
  ? L
  : never;
RemoveFirstCharTest: {
  type cases = [
    // Raw string -> encoded string
    Expect<Equal<RemoveFirstChar<"a">, "">>,
    Expect<Equal<RemoveFirstChar<"abc">, "bc">>
  ];
}
