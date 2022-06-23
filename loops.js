
//While Loop
var myArray = [];

var i = 0;
while (i < 5){
	myArray.push(i);
	i++;
}

console.log(myArray);

//==========

//For Loop
var ourArray = [];

for(var i = 5; i < 10; i++){
	ourArray.push(i);
}

console.log(ourArray);

//==========

var evenArray = [];

for(var i = 0; i < 15; i+=2){
	evenArray.push(i);
}

console.log(evenArray);

//===========

//Do while
var someNewArray = [];

var i = 10;
do {
	someNewArray.push(i);
	i++;
} while (i < 5);

console.log(someNewArray);