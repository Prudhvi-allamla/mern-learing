let bank = (initialAmount) => {
    let balance = initialAmount;
    return {
        "deposite": (amount) => {
            balance = balance + amount;
            console.log(balance)
        },
        "withdrawn": (amount) => {
            if (amount > balance) {
                console.log("insuffent amount")
            } else {
                balance = balance - amount;
                console.log(balance)

            }

        },
        "checkbalance":()=>{
            console.log("present balance ="+balance)
        }

    }
}
const result=bank(100);
console.log(result.deposite(500))
console.log(result.withdrawn(200))
console.log(result.withdrawn(200))
console.log(result.checkbalance(200))