const coding = ["js", "ruby", "java", "python", "cpp"]

// foreach not return any value

const value = coding.forEach( (item) => {
    return item
})

// console.log(value)

// filter return value

const va = coding.filter( (val) => {
    return val
})

// console.log(va)

const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = mynum.map( (num) => {return num + 10})

console.log(newNum)

const newNum2 = mynum
                .map( (num) => num * 10)
                .map( (num) => num + 5)
                .filter( (num) => num>50)

console.log(newNum2)

let init = 0

const mytotal = mynum.reduce( function (acc, curval) {
    console.log(`acc: ${acc} and curval: ${curval}`);
    return acc + curval
}, init)

const sum = mynum.reduce( (acc, curval) => acc+curval, init)

console.log(mytotal)
console.log(sum)