type ElementType<T> = T extends unknown[] ? T[number] : T

type A = ElementType<number[]>

type ElementType2<T> = T extends (infer U)[] ? U : T

type B = ElementType2<number[]>