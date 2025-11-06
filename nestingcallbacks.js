// <!-- 1. `makeTea(callback)` → waits 2 seconds, prints `"Tea ready!"`, then calls callback.
// 2. `serveTea(callback)` → waits 1 second, prints `"Serving tea..."`, then calls callback.
// 3. `drinkTea()` → prints `"Drinking tea ☕"`. -->

let makeTea=(callback)=>{
    setTimeout(()=>{
        console.log("tea ready");
        callback()
    },2000)

}

makeTea((drinkTea)=>{
    setTimeout(()=>{
        console.log("serving tea");
        let drinkTea=()=>{
            console.log("drinking tea")
        }
        drinkTea();

    },1000)


})