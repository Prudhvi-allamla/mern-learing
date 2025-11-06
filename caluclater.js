// Write a function `calculate(num1, num2, operation)`

// - if operation is `"add"`, return sum
// - if `"subtract"`, return difference
// - if `"multiply"`, return product
// - otherwise return `"Invalid operation"`

// Test each case.
let calculate=(num1, num2, operation)=>{
    if (operation =="add"){
        console.log(num1+num2);
    }
    else if(operation=="sub"){
        console.log(num1-num2);

    }
    else if(operation=="mul"){
        console.log(num1*num2);

    }else{
        console.log("enter valid operation");
    }
}
calculate(1,2,"mul")