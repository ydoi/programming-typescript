export default null

function promisify<T, A>(
  f: (arg: A, f: (error: unknown, result: T | null) => void) => void
): (arg: A) => Promise<T> {
  return (arg: A) =>
    new Promise<T> ((resolve, reject) =>
      f(arg, (error, result) => {
        if (error) return reject(error)
        if (result === null) return reject(null)
        resolve(result)
      }))
}

import {readFile} from 'fs'
let readFilePromise = promisify(readFile)
readFilePromise('./myfile.ts')
  .then(result => console.log('success reading file', result.toString()))
  .catch(error => console.error('error reading file', error))

// function promisify(func: (arg: any, callback: (err: NodeJS.ErrnoException | null, callbackArg: any) => any) => any) {
//   return (arg: any, callback: any) =>
//   new Promise((reject, resolve) => {
//     func(arg, callback)
//   }
//   return new Promise((reject, resolve) => {
//     func()
//   })
// }