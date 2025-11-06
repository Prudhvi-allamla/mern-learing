// ### **Q4. Add ingredients**

// Write a function `makeJuice(fruit1, fruit2, liquid)` that combines all three values into one string like

// `"Juice made of Apple + Banana + Milk"` and returns it.

// Then print the returned value.

let makeJuice=(fruit1,fruit2,liquid)=>{
    let finaljuice;
    finaljuice=fruit1+" "+fruit2+" "+liquid;
    return finaljuice;


}
const juice=makeJuice("apple","banana","milk")

console.log(`Juice made of ${juice}`)

