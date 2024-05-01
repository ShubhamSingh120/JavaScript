const mysym = Symbol("symbol1")

const obj = {
    name: "shubham",
    [mysym]: "mysym1",
    age: 22,
    location: "Gurugram",
    email: "singhshubham0051@gmail.com"
}

// console.log(obj.name)
// console.log(obj["email"])
// console.log(obj[mysym ])

// obj.name = "Singh"
// console.log(obj)
// Object.freeze(obj)
// obj.name = "kane"
// console.log(obj)

obj.greeting = function(){
    console.log("Hello JS user,")
}

console.log(obj.greeting)

obj.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(obj.greeting2())