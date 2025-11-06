// ### **Q6. Simple callback greeting**

// Write a function `greet(name, callback)` that prints

// `"Hello <name>"`,

// then calls the `callback()` function you pass in.

let greet=(name ,callback)=>{
    console.log(`hello ${name}`)
    callback()


}
greet("prudhvi",()=>{
    console.log("how are you")
})