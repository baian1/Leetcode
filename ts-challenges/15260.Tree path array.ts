/*
  15260 - Tree path array
  -------
  by Neil Richter (@noook) #hard 
  
  ### Question
  
  Create a type `Path` that represents validates a possible path of a tree under the form of an array.
  
  Related challenges:
  - [Object key path](https://github.com/type-challenges/type-challenges/blob/main/questions/07258-hard-object-key-paths/README.md)
  ```
  
  > View on GitHub: https://tsch.js.org/15260
*/

/* _____________ Your Code Here _____________ */

type Path<T> = T extends Record<PropertyKey, unknown>
  ? {
      [P in keyof T]: [P, ...Path<T[P]>] | [P];
    }[keyof T]
  : never;

type Path2<
  T,
  S extends any[] = [],
  K extends keyof T = keyof T
> = K extends keyof T
  ?
      | [...S, K]
      | (T[K] extends Record<keyof any, any> ? Path2<T[K], [...S, K]> : never)
  : never;
/* _____________ Test Cases _____________ */
import type {
  Equal,
  ExpectExtends,
  ExpectFalse,
  ExpectTrue,
} from "@type-challenges/utils";

declare const example: {
  foo: {
    bar: {
      a: string;
    };
    baz: {
      b: number;
      c: number;
    };
  };
};

type cases = [
  ExpectTrue<ExpectExtends<Path<typeof example["foo"]["bar"]>, ["a"]>>,
  ExpectTrue<ExpectExtends<Path<typeof example["foo"]["baz"]>, ["b"] | ["c"]>>,
  ExpectTrue<
    ExpectExtends<
      Path<typeof example["foo"]>,
      ["bar"] | ["baz"] | ["bar", "a"] | ["baz", "b"] | ["baz", "c"]
    >
  >,
  ExpectFalse<ExpectExtends<Path<typeof example["foo"]["bar"]>, ["z"]>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/15260/answer
  > View solutions: https://tsch.js.org/15260/solutions
  > More Challenges: https://tsch.js.org
*/
