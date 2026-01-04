console.log("Mamidi Lakhman Mohan Manikanta");
console.log("GitHub Handle: @mlmmanikanta");
console.log(4+5);
console.clear();

/*  variables */
// (reserved keyboard) (variable name) (type of value)
let Name; //Declared variable
let My_name = 'M.L.M.Manikanta' ;
let Handle; Handle ='@mlmmanikanta';
console.log(Name);
console.log(My_name);
console.log(Handle);
// Name declaration
// Can start with _,$,small  and capital alphabet letters should start with num and special char

const age = 23; //Fixed variable throughout the page. Can't change it 
console.log(age);

/* Data Types */
//1.  Primitive Data Types
console.log("Primitive Data Types");
let num = 12345;
console.log(num);
console.log(typeof num); // type of data type
// Basic Math
console.log("2+2 = ", 2+2);
console.log("2-2 = ", 2-2);
console.log("2*2 = ", 2*2);
console.log("2**2 =", 2**2);
console.log("2/2 = ", 2/2);
console.log("2%2 = ", 2%2);
console.log("12345++",num++); // Increment
console.log("+12345 =", +num);
console.log("++12345 =", ++num);
console.log("12345-- =",num--); // Decrement
console.log("-12345 =",--num);
console.log("--12345 =",--num);
console.log("Boolean");
let isTrue = true;
console.log(isTrue);
console.log(2+"abc"); //Not a number
console.log(undefined); // It have a value not sure any value
console.log(null) ; //It has null value
let isFalse = false;
console.log(isFalse);
console.log(age + undefined);

/* Comparison Operators */
// Relational Operators
console.log("2 > 4 = " ,2 > 4); // greater than
console.log("2 < 4 = " ,2 < 4); // less than
console.log("2 >= 4 =" ,2 >= 4); // greater than or equal to
console.log("2 =< 4 =" ,2 <= 4); // less than or equal to
// Equality Operators
console.log("This 2(num) and '2'(string) used for the below question");
console.log("==(double equals)", 2 == '2'); // compare the value
console.log("===", 2 === '2');
console.log(2 +'2'); // compare the type and value
console.log("!(not equals to)",2 ===!'2');

/* Strings */
let firstName = "Mamidi";
let lastName  = " Lakshman Moahn Manikanta";
console.log(firstName + lastName);
// 1. Concatenation Method
let fullName =firstName.concat(lastName);
console.log("Concatenation Method =" , fullName);
// 2. Append
let $Full_Name = "Mamidi";
$Full_Name += " Lakshman Moahn Manikanta";
console.log("Append Method = ",$Full_Name);
// 3. Length
let $Name = "LakshmanMohanManikanta";
console.log("Length of the String using .length", $Name.length);
// 4. UpperCase
console.log("To Upper Case",$Full_Name.toUpperCase())
// 5. LowerCase
console.log("To Lower Case",$Full_Name.toLowerCase())
// 6. Slice
console.log("Slice Method starts with 6 and end 15 (only btw values) is",$Full_Name.slice(6,15));
// 7. Split 
console.log("Split the value for indiviual ",$Full_Name.split('')); // Became a array
console.log("Split the value for hole",$Full_Name.split());
// 8. Join
console.log("Join the split value = ", $Full_Name.split('').join(""));
console.log("Join the split value using '-' = ", $Full_Name.split('').join("-"));
// 9. Includes
console.log("Includes check the true or false .just like my fullname will get check the first name", $Full_Name.includes(firstName));
// 9. Trim
let $Full_Name1 ="         Lakshman Mohan Manikanta              "
console.log("Trim the removes spaces at the start and end '" + $Full_Name1.trim() + "'");
// 10. Convert String to number
let Num ="22";
//a. ParseInt
let Num1;
Num1 =parseInt(Num);
console.log(Num1);
// b. Other Method
 let Num2;
 Num2 = +Num;
 console.log(Num2);

/*  Condition Statements */
//1. If else if
console.log("Grade is below :");
let abc;
abc = "98";
if (isNaN(abc)) {
if (abc >= 90 && abc < 100) {
    console.log("You got A+ grade");
}
else if (abc >= 80 && abc < 90) {
    console.log("You got A grade");
}
else if (abc >= 70 && abc < 80) {
    console.log("You got B+ grade");
}
else if (abc >= 60 && abc < 70) {
    console.log("You got B grade");
}
else if (abc >= 50 && abc < 60) {
    console.log("You got C grade");
}
else if (abc >= 40 && abc < 50) {
    console.log("You got C grade");
}
else if (abc >= 30 && abc < 40) {
    console.log("You got D grade");
}
else if (abc >= 20 && abc < 30) {
    console.log("You got E grade");
}
else if (abc >= 0 && abc < 20) {
    console.log("You got E grade");
}
else {
    console.log("Invalid input. Enter value between 0 to 100");
}
}
else {
    console.log("Invalid input. Enter value between 0 to 100");
}

// Checking the password having 8 char
let pass ;
pass = "M.L.M.Manikanta";
if(pass.length === 8){
    console.log("Password is too short");
    
}
else {
     console.log("Password is more than 8");
}

// 2. Switch
let x = "Dec";
switch (x) {
    case "Jan":
        console.log("This is Jan month");
        break;
    case "Feb":
        console.log("This is Feb month");
        break;
    case "March":
        console.log("This is March month");
        break;
    case "April":
        console.log("This is April month");
        break;
    case "May":
        console.log("This is May month");
        break;
    case "June":
        console.log("This is June month");
        break;
    case "July":
        console.log("This is July month");
        break;
    case "Sep":
        console.log("This is Sep month");
        break;
    case "Oct":
        console.log("This is Oct month");
        break;  
    case "Nov":
        console.log("This is Nov month");
        break;
     case "Dec":
        console.log("This is Dec month");
        break;    
    default:
        console.log("Invalid month");
        break;
}
/* Loops */
//1. For Loop
//for (initialExpression,; condition; increment/desrement Expression) {}
for (let i=1; i<=5; i++){
    console.log("Number is",i);
    
}
for (let i=1; i<=10; i++){
    for (let j=1; j<=i; j++){
    console.log("*");
    }
}
// 2. While Loops
/* While (condition) {
 // code block
} */
let z = 1;

while (z <=10){
    console.log(z," * 5 =",z *5);
    z++;
}
// 3. Do while Loop (Contion will run once if it true or false)
let A1 = 20;
do {
    console.log("Do operation in Do-while", A1);
    A1++;
} while (A1<22) {
    console.log("while loop after do operation", A1);
}
/*Logical Operators*/
// 1. AND (&&)
let op1 = 4;
let op2 = 5;
let op3 = 9;
console.log("&& operator", op1+op2 === op3 && op3-op2 === op1 );
// 2. OR (||)
console.log("|| operator", op1+op2 === op3 || op3+op2 === op1 );
// 3. Not equals (!)
console.log("Not equals to",!(op1+op2 === op3));
/* Arrays */
let Arra = ['one','two','three','four'];
console.log(Arra);
let NesArra = ['one',['two','three',['four']],'five','six','seven',['eight', 'nine','ten']];
console.log(NesArra);
console.log("Accessing nested Array", NesArra[1]);
console.log("Accessing nested Array", NesArra[1][2]);
console.log("Accessing nested Array", NesArra[1][2][0]);
// 1. Push
Arra.push("Eleven");
console.log("Adding new element using the push method", Arra);
// 2. Pop
Arra.pop();
console.log("Removing last using the pop method", Arra);
// 3. Shift
Arra.shift();
console.log("Removes the first element of an arry", Arra);
// 3. Unshift
Arra.unshift("One");
console.log("Add new element at beginning of an array", Arra);
// 4. Concats
Arra1 =['five','six'];
console.log("Concats the Array",Arra.concat(Arra1));
// 5. Includes
console.log("Includes will check the value in the array or not which is", Arra.includes('Six'));
// 6. Join
console.log("Help to join the array", Arra.join("----"));
// 7. Reverse
console.log("Reverse the array", Arra.reverse());
// 8. Slice
console.log("Slicing the Array" ,Arra.slice(0,1));
//9. Sort
console.log("Sorting Array", Arra.sort());

/* OBJECTS */
// const <name> = { key : value} 
const person = {
    Number  : 20,
    Alpha : "MLMM",
    isPro : true,
    location: ['Ramnagar', 'Krishna']
}
console.log("OBJECTS",person);
console.log("First method Accessing indivual OBJECTS(Number)",person["Number"]);
console.log("second method Accessing indivual OBJECTS(Number)",person.Number);
person.user ="Adim";
console.log("Adding new object",person);
console.log("Updaing object",person.user ="Admin", person);
console.log("**Function**");
/* Function */
// Afunction is a block of that performs a specific task
function hello(){
    console.log("Hello JavaScript");
}
hello(); // call or run or execute
hello(); 
// Function Declaration
Fname("Lakshman");
function Fname(name) {
    console.log(`Hello ${name}`);
    console.log("Hello"+" "+ name);
}

function myFunction(x,y) {
    return x*y;
}
const myFunc=myFunction(4,5);
console.log("Using Return",myFunc);

// Function Expression
let UserName = function (user) {
    console.log(`Handle ${user}`);
}
UserName("@mlmmanikanta");
console.log("**Call Back Function**");
/* When we provide function as an (argument) to other function that function is known as callback function. */
function showCallFun(fn) {
    let value =20;
    fn(value);
}

showCallFun(function (value) {
     console.log(value);
});

function Callback2(name, id, cb2) {
    console.log(`Hi, I am ${name} my id is ${id}`);
    cb2();
}

Callback2("Lakshman",1,function cb2() {
    console.log("This is a call back function");
    
});
console.log("** Methods in JS **");
console.log("** First Method **");
function meth () {
    return `Hello, my name ${admin.User1} & I am ${admin.age1} years old.`;
}
const admin = {
    User1 : "Lakshman",
    age1 : 25,
    meth, 
}
console.log(admin.meth());

console.log("** Second Method **");
const admin2 = {
    User1 : "Maruthi",
    age1 : 23,
    meth1 : function () {
    return `Hello, my name ${admin2.User1} & I am ${admin2.age1} years old.`;
}
}
console.log(admin2.meth1());

console.log("**JSON = Javascript Object Notation**");
const Per = {
    name: "Lakshman",
    handle : "@mlmmanikanta",
    age: 25,
    address : {
        Place: "Krishna",
        Pincode: 521126,
    },
};

const jsonString = JSON.stringify(Per);
console.log("Print the JSON to string", jsonString);
const parsedString = JSON.parse(jsonString);
console.log("Print the string to JSON", parsedString);

console.log("** Date and Time **");
const date =  new Date();
console.log(`Current Date: ${date}`);  
// year, month, day,hours, minutes, seconds, milliseconds
const year = date.getFullYear();
const month = date.getMonth(); // Month is 0-based (0: January, 1: February, ..., 11: December)
const DATE = date.getDate();
const day = date.getDay();
 const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
 const milliseconds = date.getMilliseconds();

console.log(`year:  ${year}`);
console.log(`month:  ${month}`);
console.log(`day:  ${day}`);
console.log(`date:  ${DATE}`);
console.log(`hours:  ${hours}`);
console.log(`minutes:  ${minutes}`);
console.log(`seconds:  ${seconds}`);

console.log("Date in String :", date.toDateString());
console.log("Date in ISO String :", date.toISOString());
console.log("Date in Local String :", date.toLocaleDateString());
date.setDate(date.getDate() + 75);
console.log("+2 Increment :", date.toLocaleDateString());
date.setDate(date.getDate() - 4);
console.log("-4 decrement :", date.toLocaleDateString());
// Set Interval
const interval = setInterval(() => console.log("This function will be executed every 1 sec"), 1000);
// Set Timeout
setTimeout(function () {
    clearInterval(interval);
    console.log("Interval Stopped at 10 sec");
}, 11000)




















