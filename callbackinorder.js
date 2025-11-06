// Create two functions:

// - `cookRice(callback)` → prints `"Cooking rice..."`, waits **2 seconds** using `setTimeout`, then prints `"Rice ready!"` and calls `callback()`.
// - `eatRice()` → prints `"Eating now 🍚"`

// Now call:

// `cookRice(eatRice);`

// (Hint: Use `setTimeout(callback, 2000)`.)

let cookRice=(eatRice)=>{
console.log("cooking rice") 
setTimeout(()=>{
    console.log("rice ready");
    eatRice()
 },2000)

}
cookRice(()=>{
    console.log("eating now")

})
