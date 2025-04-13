/* 
Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
 */

const sqFn = n => n*n
const dblFn = n => n*2
const add5Fn = n => n+5

const composedFn = n =>{
    const nSq = sqFn(n)
    const dblNSq = dblFn(nSq)
    return add5Fn(dblNSq)
    // return add5Fn(dblFn(sqFn(2))) // shortcut
}

console.log(composedFn(2))