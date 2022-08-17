//Switch satements


function caseInSwitch(val) {
	var answer = "";

	switch(val) {
		case 1:
			answer = 'alpha';
			break;

		case 2:
			answer = 'beta';
			break;

		case 3:
			answer = 'gamma';
			break;
		
		case 4:
			answer = 'delta';
			break;
		

		//Is going to show IF statement is >= 5 AND <=8
		case 5:
		case 6:
		case 7:
		case 8:
			answer = "You've entered a number from 5 to 8!";
			break;

		default:
			answer = 'Wrong number!';
			break;
	}

	return answer;
}

console.log(caseInSwitch(9));
