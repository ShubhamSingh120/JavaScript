const a = [1, 2, 3]
const b = [4, 5, 6]

// a.push(b)
// console.log(a)

// a.concat(b)
// console.log(a)

// const c = a.concat(b)
// console.log(c)

const d = [...a, ...b]
console.log(d)

const complex = [1, 2, 3, [4, 5], 7, [6, 4, 2, [1, 2, 3, [1.0, 2.9]]]]
const simple = complex.flat(Infinity)

console.log(simple)

console.log(Array.isArray("shubham"))
console.log(Array.from("Shubham"))
console.log(Array.from({name: "shubham"}))