// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    // console.log(num)
}

// Maps

const map = new Map()
map.set("IN", "India")
map.set("FR", "France")
map.set("GER", "Germany")

// console.log(map)

for (const [key, val] of map) {
    // console.log(key, " :- ", val)
}

// for of not work with Objects

// for in

const obj = {
    'A': 0,
    'a': 1,
    'b': 2,
    3: 'c',
    4: 'd'
}

// for(const key in obj){
//     console.log(key, " :- ", obj[key])
// }

// arr.forEach( function (item) {
//     console.log(item)
// })

// arr.forEach( (it) => {
//     console.log(it)
// } )

// function print(item){
//     console.log(item)
// }

// arr.forEach(print)