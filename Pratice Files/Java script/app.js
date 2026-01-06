/* Template strings, also known as template literals, are a feature in JavaScript that allows you to create strings with embedded expressions. They are denoted by backticks instead of single or double quotes. Template strings provide a more flexible and concise way to construct strings, especially when they involve variables or expressions. ! */
console.log(`Just
    Template
            Strings`);

// Arrow functionalso knwas as fat arrow functions, are a concise and shorter way to define functions in JS.
const Name = (Uname) => `Hello ${Uname}`;
console.log("Lakshman");

const Number = num => {
    console.log(`Number : ${num}`);
    console.log(`Square : ${num*num}`);
    console.log(`Cubic : ${num*num*num}`);
    console.log(`21 times : ${num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num}`);
    console.log(`365 times : ${num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num*num}`);
    return "Output for the above number 😊";
}
console.log(`------------------------------------------`);
console.log(Number(1.1));
console.log(`------------------------------------------`);
console.log(Number(1.01));
console.log(`------------------------------------------`);
// ES 6 Literals
let lib ={
    sum: (a,b) => a+b,
    Mult: (a,b) => a*b,
}
console.log("Adding two number",lib.sum(22,45));
console.log("Multiply two number",lib.Mult(22,45));

let PersonES ={
    
}

