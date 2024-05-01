let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let createnewdate = new Date(2023, 0, 25)
console.log(createnewdate.toDateString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(createnewdate.getTime())

console.log(Math.floor(Date.now()/1000))

console.log(myDate.toLocaleString('default', {
    weekday: "long",
}))