

// Is even ?

function isEven(num) {
	return num % 2 === 0;
}


// Factorial()

//googled answer

// var f = [];
// function factorial(num) {
// 	 if(num == 0 || num == 1)
// 	 	return 1;
// 	 if (f[num] > 0)
// 	 	return f[num];
// 	 return f[num] = factorial(num - 1) * num;
// }

function factorial(num) {
	// define a result variable
	var result = 1;
	//calculate factorial and store vaule in result
	for(var i = 2; i <= num; i++){
		result *= i;
	}
	// return the result variable
	return result;
}




//kebabToSnake()



function kebabToSnake(str) {
	// replace all '-' with "_" 
	var newStr = str.replace(/-/g, "_");
	// return str
	return newStr;
}

































