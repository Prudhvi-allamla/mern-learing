// ### **Q9. setTimeout + callback chain**

// Write two functions:

// - `washClothes(callback)` → prints `"Washing clothes..."` then after **3 seconds** prints `"Done washing!"` and calls `callback()`
// - `dryClothes()` → prints `"Drying clothes..."`

// Now call them in sequence:

// `washClothes(dryClothes);`
let washingClothes=(dryClothes)=>{
    console.log("washing cloths")
    setTimeout(()=>{
        console.log("done washing!");
        dryClothes()
    },3000)
    
}
washingClothes(()=>{
    console.log("Drying clothes")
})

