// "...args" used to take all the arguments and convert them to the array args 

const sum = (function() {
	return function sum(...args) {
		return args.reduce((a,b) => a + b, 0);
	};
})();

console.log(sum(1,2,3,4));
