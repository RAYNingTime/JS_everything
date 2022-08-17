//Older way to create objects
var SpaceShuttle = function(targetPlanet){
	this.targetPlanet = targetPlanet;
}

var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet);

//Class Syntax way to make it
//Example:

function makeClass(){
	class Vegetable {
		constructor(name){
			this.name = name;
		}
	}
	return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);
