function myname(){
    console.log("Shubham")
}

function addtwonum(num1, num2){
    console.log(num1 + num2)
}

myname()
addtwonum(3, 5)

function loginusername(user = 'Sam'){
    if(user === undefined){
        console.log("Please Enter Username");

    }
    return `${user} just logged in`
}

console.log(loginusername("Shubham"))


function calculateCartPrice(...num4){
    return num4
}

console.log(calculateCartPrice(200, 300, 400, 2000))

// object and array can also be passed as argument


