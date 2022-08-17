
/*
	Function form can be simplified

This function: 
var magic = function(){
	return new Date();
}

Actually the same as this one:
var magic = () => {
	return new Date();
}

And same and this one:*/

var magic = () => new Date();

//How to write arrow functions with parameters?

var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2], [3,4,5]));


// How to write higher Order Arrow Functions #1

const realNumberArray = [4, 5.6, 3.14, 42, 6, 8.34, -2];

const squareList =  (arr) => {
	const squaredIntegers = arr.filter(num => Number.isInteger(num) && num>0).map(x => x * x);
	return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// How to write higher Order Arrow Functions #2

const increment = (function() {
	return function increment(number, value = 1) {
		return number + value;
	};
})();

console.log(increment(5,2));
console.log(increment(5));
