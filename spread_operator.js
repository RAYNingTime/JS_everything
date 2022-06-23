
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

let arr2;

(function() {
	//IF we put line: 
	// arr2=arr1;
	//Then arr2 is going to be the same as arr1, and if we'll change
	// arr1 => arr2 is also going to be changed, but if we use
	arr2 = [...arr1];
	//Then arr2 is still going to contain prev. version
	//While arr1 is going to be changed
	arr1[0] = 'potato';
})();

console.log(arr2);
console.log(arr1);