var ourDog = {
	"name": "Camper",
	"legs": 4,
	"tails": 1,
	"huge eyes": true,
	"friends": ["everything!"]
};

var nameValue = ourDog.name;
var hugeEyesValue = ourDog["huge eyes"];

console.log(nameValue);
console.log(hugeEyesValue);

//To change smth in object:

ourDog.name = "Lucy";

nameValue = ourDog.name;
console.log(nameValue);


// ==========

//Acess object with numbers (Variables)

var ageStudents = {
	18: "Dima",
	19: "Ivan",
	21: "Alice"
};

var studentAge = 21;
var student = ageStudents[studentAge];

console.log(student);

// ==========

//To add new propery to Object

ourDog.bark = "bow-wow";

console.log("\n=======\n"+ourDog.bark);

// ==========

//To test object for prorepties we can use .hasOwnProperty("item")

console.log(ourDog.hasOwnProperty("bark"));

// ==========

//Nested objects

var myStorage = {
	"car": {
		"inside": {
			"glove box": "maps",
			"passanger seat": "crumbs"
		},
		"outside": {
			"trunk": "jack"
		}
	}
};

console.log(myStorage.car.inside["glove box"]);

var myPlants = [
	{
		type: "flowers",
		list: [
			"rose", 
			"dandelion"
		]
	},
	{
		type: "trees",
		list: [
			"fir",
			"pine",
			"birch"
		]
	}
];

var secondTree = myPlants[1].list[1];
