// console.log(2 > 3)
// console.log(2 < 3)
// console.log(2 <= 3)
// console.log(2 >= 3)
// console.log(2 == 3)
// console.log(2 != 3)

// console.log("2" > 1)
// console.log("02" > 1)

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
console.log(null >= 1)

// The reason is that an equality check == and comparison > < <= >= work differently
// Comparision convert null to a number, treating it as 0.
// That's why 13 -> null >= 0 is true and 11 -> null>0 is false

console.log("2" === 2) //strict check