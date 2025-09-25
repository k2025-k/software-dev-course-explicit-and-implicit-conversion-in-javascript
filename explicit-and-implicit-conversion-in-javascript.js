/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; // "5"-2 is an implicit conversion, Java changes the string "5" into a number. It's not an error persay
//but can be confusing for later edits. Instead it can explicitly be a number with Number() changing a string
//to a number.
console.log("The result is: " + result);

let entry =("false");
let isValid = Boolean( entry === "true"); // Boolean ("false") Again is not an error the code works correctly, 
// with an any string that is not empty will be read as true, but this creates a false false being true. To fix that
// we convert the string into a boolean by using the strict equality operator so that if entry really equals true 
// the output is true ie "true" becomes true, "false" becomes false for the Boolean.
if (isValid) {
    console.log("This is valid!");
} else {
    console.log("This is NOT valid!");}
// We can finish the code so there is an output when false.

let age = "25";
let numAge = Number(age); //converting the string to a number so later calculation 
// totalAge is correct and not merging two strings
let totalAge = numAge + 5;
console.log("Total Age: " + totalAge);

//implicit conversion

let numName= 567;
console.log (numName.toString());//explicit conversion changing number to a string because numName is used as id or name and not
//a number

let implicitBAnswer=("");
if (implicitBAnswer) {
   console.log("This is true."); // This is implicit conversion, whatever is put in implicitBAnswer gets converted to true
   //or false by computer, since the input is an empty string the computer will change that to false and console will print
   //out This is false.
} else {console.log ("This is false!");
}
