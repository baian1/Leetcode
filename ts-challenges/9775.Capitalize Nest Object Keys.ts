/*
  9775 - Capitalize Nest Object Keys
  -------
  by MayanDev (@Mayandev) #hard #object #array
  
  ### Question
  
  Capitalize the key of the object, and if the value is an array, iterate through the objects in the array.
  
  > View on GitHub: https://tsch.js.org/9775
*/


/* _____________ Your Code Here _____________ */

type CapitalizeObject<T> = {
  [P in keyof T as Capitalize<P & string>]: CapitalizeNestObjectKeys<T[P]>;
};

type CapitalizeArray<T extends unknown[], Res extends unknown[] = []> = T extends [infer L, ...infer R] ? CapitalizeArray<R, [...Res, CapitalizeNestObjectKeys<L>]> : Res

type CapitalizeNestObjectKeys<T> = T extends unknown[] ? CapitalizeArray<T> : T extends Record<PropertyKey, unknown> ? CapitalizeObject<T> : T

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type foo = {
  foo: string
  bars: [{ foo: string }]
}

type Foo = {
  Foo: string
  Bars: [{
    Foo: string
  }]
}

type cases = [
  Expect<Equal<Foo, CapitalizeNestObjectKeys<foo>>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9775/answer
  > View solutions: https://tsch.js.org/9775/solutions
  > More Challenges: https://tsch.js.org
*/

