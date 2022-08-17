
//This function is allowing us to change type of the variable
//Exmpl: From strin to Integer (As it shown below)

function convertToInteger(str){

	return parseInt(str);
}

//Is going to give you a number 56
convertToInteger("56"); 
//==========

//Also works with Redix
function convertToInteger(str){

	// 2 stays for "Base 2" (binary)
	return parseInt(str, 2);
}

//Is going to give you a number 19
redixConvertToInteger("10011");
