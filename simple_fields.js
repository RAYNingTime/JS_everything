const createPerson = (name,age,gender) => {
	return {
		name: name,
		age: age,
		gender: gender
	};
};

//Same as 
const createNewPerson = (name,age,gender) => ({ name, age, gender});

console.log(createPerson("Zodiac Hasbro", 56, "male"));
console.log(createNewPerson("Zodiac Hasbro", 56, "male"));
