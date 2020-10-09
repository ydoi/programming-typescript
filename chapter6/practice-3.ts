// type Without<T,U> = T extends U ? never : T
type Exclusive<T, U> = Exclude<T, U> | Exclude<U, T>