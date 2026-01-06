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

Multiply1 = (a=1,b=1) => { return a*b; }
console.log( "Multiply two number a and b is ",Multiply1(2,5));
// Spread Operator itis a new addition to the set of operators in JS.
console.log("## Using Spread Operator");
console.log("1. Array Spread Operator");
SpreadArray=(a,b,c,d) => {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    console.log(`d is ${d}`);
}
let SArray =[1,2,3,4];
SpreadArray(SArray);
SpreadArray(...SArray);
let SArray2 =[5,6,7,8];
let SArrayTN =[SArray, SArray2, 9,10]
let SArrayT =[...SArray, ...SArray2, 9,10]
console.log("Combine Nested Array", SArrayTN);
console.log("Combine Array", SArrayT);

const user ={
    name:"Lakshman",
    age: 22,
}
let clone ={...user, location:"Krishna", ...SArrayT};
let clone1 =[...SArrayT, ...user];
console.log(clone);
// console.log(clone1);





