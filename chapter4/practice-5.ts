// function is<T>(actual: T, expect: T): boolean {
//   return actual === expect
// }
function is<T>(a: T, ...b: [T, ...T[]]): boolean {
  return b.every(_ => { return _ === a })
}

is('string', 'otherstring', '')
is(true, false, true)
is(42, 42, 42)
// is(10, 'foo')