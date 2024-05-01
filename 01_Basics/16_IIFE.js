// Immediately Invoked Function Expressions IIFE

(function chai(){
    // named IIFE
    console.log(`DB Connected`)
})();

( (user) => {
    console.log(`DB Connected ${user}`)
})("Buddy")

// IIFE is used to remove global function pollution. It can immediately invoke function.