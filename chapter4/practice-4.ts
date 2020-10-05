function call<T extends [unknown, string, ...unknown[]], R>(
  f: (...args: T) => R,
  ...args: T
): R {
  return f(...args)
}

call((a, b, c) => { return a + b + c }, 1, 'a', 3)