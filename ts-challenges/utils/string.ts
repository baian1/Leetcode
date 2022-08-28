import { Equal, Expect } from "@type-challenges/utils";
import { Join } from "./array";

export type RepateChar<char extends string, count extends number = 0, arr extends string[] = []> = arr['length'] extends count ? Join<arr> : RepateChar<char, count, [...arr, char]>

namespace test {
  type cases = [
    // Raw string -> encoded string
    Expect<Equal<RepateChar<'a', 5>, 'aaaaa'>>,
  ];
}
