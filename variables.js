//JavaScript have Case Sensitivity in variables

/*
	Data Types (7 different types):
	undefiend, null, boolean, string, symbol, number and object
*/

// === THERE IS 3 WAYS TO DECLARE VARIABLE === //

//First way to declare variable
//Is going to be used all among the program
var myName = "Ivan"

myName = 8

//Second way to declare variable
//Is going to be used only in scope where you declared that
let ourName = "UNIC"

//Third way to declare variable
//Cannot be changed (Regular const)
const pi = 3.14

//-----------------

//Initializate Variable
var a = 9;
// a - initializated variable;

//Uninitializated Variable

var b;
// b - uninitializated Variable
b = 10;

//-----------------

//Basic Math

//Add
var sumTwoNums = a+b;

//Difference
var diffTwoNums = b-a;

//Multiplication
var multTwoNums = a*b;

//Dividing
var divTwoNums = a/b;

//-----------------

//Incrementing numbers
var numToIncrement = 0;

numToIncrement = numToIncrement + 1;
// OR
numToIncrement++;
//incrementedNum should be 2
var incrimentedNum = numToIncrement;

//-----------------

//Decrimenting numbers
numToIncrement = numToIncrement - 1;
// OR
numToIncrement--;
//decrimentedNum again 0
var decrimentedNum = numToIncrement;

//-----------------

//You don't have any special initialization for doubles
var firstDouble = 5.5;
var secondDouble = 2.0;

var doubleMult = firstDouble * secondDouble;
var doubleDiv = firstDouble / secondDouble;

//-----------------

//Remainders are calculating with %

var remained;
remained = 11 % 3;

//Remainder 2

//-----------------

//Shortcuts are actually the same as in C++/C/PHP

var someNum = 5;
someNum +=2;
someNum -=1;

// someNum is going to be equal to 6

// BUT JS also allows us to make a multiplication shortcut!

someNum *= 2;
//console.log(someNum);

// someNum is going to be equal to 12!

// AND JS also allows us to make a divide shortcut!

someNum /= 2;
//console.log(someNum);

// someNum is going to be equal to 6!

//-----------------

/*****
CODE  OUTPUT
\' 	single quote
\" 	double quote
\\ 	backslash
\n 	newline
\r 	carrage return
\t 	tab
\b 	backspace
\f 	form feed
******/

//To cancel double quotes you can use \ symbol

var someString = "Hi, my name is \"Ivan\"!";

//-----------------

//To concatinate strings JS uses Plus

var name = "Leo"
var string = "Hey, " + name +"!";
string += "\nHow is it going?";

//console.log(string);

//-----------------

//To find lenght of the string JS uses .length

string_length = string.length;
//console.log(string_length);

//To find some certain number we use [] with position from 0 to length-1

//In JS it is not allowed to change letter with index!!!
var someName = "John";

console.log("String before update " + someName);
someName[0] = "F";
console.log("String after update " + someName);

//-----------------
