// Create a function waitAndSay(message, delay) that prints the message after the given delay in milliseconds
let waitAndSay=(message,delay)=>{
    setTimeout(()=>{
        console.log(message)
    },delay)

}
waitAndSay("good morning",2000)
waitAndSay("good eveing",5000)