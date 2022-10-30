import { Equal } from "@type-challenges/utils";

export type IF<C, R, E> = C extends true ? R : E;
export type AND<A, B> = A extends true
  ? B extends true
    ? true
    : false
  : false;
export type OR<A, B> = A extends false
  ? B extends false
    ? false
    : true
  : true;
