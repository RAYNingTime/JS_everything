// It's same as in C++/C/PHP

var number = 5;

if(number == 4)
	console.log("It's four!");
else if(number == 5)
	console.log("It's five!");
else 
	console.log("It's not four or five!");



/*
Logic Gates

Equality == *With type convesrion
Strict Equality === *Without type convesrion

NOT equality != *With type convesrion
Strict NOT equality !== *Without type convesrion

Greater >
Greater or equal >=

Less <
Less or equal <=

AND &&
OR ||
*/

//==========

//Ternary operator (shortcut for the IF statement)
// condition ? statement-if=true: statements-if-false;

number == 4 ? console.log("It's four!") : console.log("It's not four!");

number == 4 ? console.log("It's four!") : number < 4 ? console.log("It's less than four") : console.log("It's bigger than four!");
