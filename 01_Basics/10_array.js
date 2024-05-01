const arr = [0,9,8,7,6,5]
const hero = [0,8,6, true, "shubham"]

const arr2 = new Array(1,0,8,5,98.9)
console.log(arr2[2])

arr.push(7)
console.log(arr)
arr.pop()

arr.unshift(8)
arr.shift()

console.log(arr.includes(7))
console.log(arr.indexOf(7))

const newarr = arr.join()

console.log(typeof arr)
console.log(typeof newarr)