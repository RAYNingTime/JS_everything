
const MATH_CONSTANTS = {
	PI: 3.14
};

//To prevent changing object we use function called Object.freeze
Object.freeze(MATH_CONSTANTS);

try {
	MATH_CONSTANTS.PI = 99;
} catch( ex ) {
	console.log(ex);
}
