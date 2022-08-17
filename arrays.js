
//Array can contain every type of data
var ourArray = ["John", 23];

//Contains string John
var exactIndex = ourArray[0];

//But JS allows us to edit array with index!
ourArray[0] = "Leo";

//console.log(ourArray); - Shows [ 'Leo', 23 ]
//----------

//Nest array
//To enter multi-dementional array we use multiple indexes
var nestArray = [["John", "Doe", 23], ["Ivan", "Kosiakov", 19]];

//console.log(nestArray[1][1]); - Shows Kosiakov
//----------

//push() function allows us to insert some data in the array INSIDE OF THE ARRAY all the elements of the array

//To call the function for the certain array we use "." symbol
ourArray.push(["Nicosia", "Student"]);
// Before: [ 'Leo', 23 ]
// After: [ 'Leo', 23, [ 'Nicosia', 'Student' ] ]
console.log(ourArray);

//----------

//pop() function allows us to TAKE from array LAST element

//Shows: Pop of the array: Nicosia,Student
console.log("Pop of the array: " + ourArray.pop());

//Shows: Array AFTER pop: Leo,23
console.log("Array AFTER pop: " + ourArray);

//----------

//shift() function allows us to TAKE from array FIRST element

//Shows: Shift of the array: Leo
console.log("Shift of the array: " + ourArray.shift());

//Shows: Array AFTER Shift: 23
console.log("Array AFTER Shift: " + ourArray);

//----------

//unshift() function allows us to INSERT to the array from 0 position

ourArray.unshift("Ivan");

//Shows: Array AFTER unshift: Ivan,23
console.log("Array AFTER unshift: " + ourArray);

