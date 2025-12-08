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
console.log("2 >= 2 =" ,2 >= 4); // greater than or equal to
console.log("2 =< 2 =" ,2 <= 4); // less than or equal to
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










