var voxel = {x: 3.6, y: 7.4, z:6.54};

var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

const {x: a, y:b, z:c} = voxel; // a = 3.6, b = 7.4, c = 6.54

const AVG_TEMPERATURES = {
	today: 77.5,
	tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
	"use strict";

	const { tomorrow: tempOfTomorrow} = avgTemperatures;

	return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

//With nested objects

const LOCAL_FORECAST = {
	today: { min:72, max:83},
	tomorrow: { min:73.3, max:84.6}
};

function getMaxOfTmrw(forecast) {
	"use strict";

	const { tomorrow : { max : maxOfTomorrow }} = forecast;

	return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

//To assign variables from arrays

//With this method firstNum is going to be equal 1 and secondNum is going to be equal 2
//We cannot specify which number is going to the variable
//But we can leave some empty spots, so for example thirdNum is going to be equal 4
const [fisrtNum,secondNum, ,thirdNum] = [1,2,3,4,5,6];
console.log(fisrtNum,secondNum,thirdNum);


//With this method we can swap two variabels
let firstA = 8, secondB = 6;
(() => {
	"use strict";
	[firstA, secondB] = [secondB, firstA];
})();

console.log(firstA, secondB);

//Using with Rest Operator

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
	const [ , , ...arr] = list;

	// IF we would initializate 
	//  [a , b, ...arr] = list;
	// So a is going to be equal 1, b is going to be equal 2
	// AND ...arr is going to be equal the rest of the array
	// As result we are making two first spots empty, so array deletes them

	return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);


