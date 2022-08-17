
//Math.random - used to generate number from 0 to 1
//Math.floor - used to round number to lowest
//TIP: To generate number in range that you need you can multiply random floor number

var randomNumber = Math.random();

console.log(randomNumber);

//Random number from 0 to 19
randomNumber = Math.floor(randomNumber * 20);
console.log(randomNumber);

//To generate number in your range we can use this command:

function ourRandomRange(ourMin, ourMax) {
	return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(ourRandomRange(5,10));
