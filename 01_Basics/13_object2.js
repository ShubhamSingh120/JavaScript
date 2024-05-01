const obj = {
    fullname: {
        fname: "Shubham",
        lname: "Singh"
    }
}

// console.log(obj.fullname.fname)

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}

const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

const obj4 = {...obj1, ...obj2, ...obj}
// console.log(obj4)

const user = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
]

