/**
 * 
 * Robert Newton
 * 04/20/17
 * activity2
 * 
 */

//this is a function assigned to a variable, we will call it before hand to prove that doesn't work

//this works
var exFunction = function(x) {
    return "this function is " + x;
}

console.log(exFunction("correct"));

//this doesn't -- commented out to test further
/*
console.log(wrongFun(26));

var wrongFun = function(x) {
    return "Your age is " + x;
}
*/

//This should work either way

console.log(double(12));

function double (x) {
    return x * x;
}

console.log(double(44));