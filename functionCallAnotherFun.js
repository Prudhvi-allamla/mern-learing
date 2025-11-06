// 1. `greetUser()` → prints `"Welcome to Student Tribe!"`
// 2. `showMenu()` → calls `greetUser()` first, then prints `"Here is your course menu!"`

// Now call only `showMenu()` in your code and check the order of m

let showMenu=()=>{
    let greetUser=() => {
        console.log("welcome to student tribe");

    }
    greetUser()
     console.log("here is the course memu")
}
showMenu()