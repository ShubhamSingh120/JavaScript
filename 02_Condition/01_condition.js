// if

// if (true / false){
//     code
// }

// comparison operator -> >, <, ==, !=, >=, <=

if (2 == '2'){
    console.log("Executed")
}

// if (condition) {
//     code
// } 
// else if (condition) {
//     code
// }
// else{
    // code
// }



// switch

// switch (key) {
//     case val1:
//         code
//         break
//     case val2:
//         code
//         break
//     default:
//         code
// }

const month = 3

switch(month){
    case 1:
        console.log("January");
        break
    case 2:
        console.log("February");
        break
    case 3:
        console.log("March");
        break
    case 4:
        console.log("April");
        break
    case 5:
        console.log("May");
        break
    case 6:
        console.log("June");
        break
    case 7:
        console.log("July");
        break
    case 8:
        console.log("August");
        break
    case 9:
        console.log("September");
        break
    case 10:
        console.log("October");
        break
    case 11:
        console.log("November");
        break
    case 12:
        console.log("December");
        break
    default:
        console.log("wrong number");
        break
}

// falsy value -> false, 0, -0, BigInt 0n, "", null, Nan, undefined

// truthy value -> "0", 'false', " ", [], {}, function(){}

// Array and Object is Empty or not

const arr = []

if(arr.length === 0){
    console.log("Array is Empty")
}

const obj = {}

if (Object.keys(obj).length === 0){
    console.log("Object is Empty")
}

// Nullish Coalescing Operator (??): null undefined

let val
val = 5 ?? 10
console.log(val)
val = null ?? 10
console.log(val)
val = undefined ?? 10
console.log(val)
val = null ?? 10 ?? 20
console.log(val)

// Ternary Operator

// condition ? true : false

const price = 100
price >= 80 ? console.log("greater than 100"): console.log("less than 100")