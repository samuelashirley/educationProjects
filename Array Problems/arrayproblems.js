//printReverse - Write a funtion printReverse() that takes an array as an argument and prints out the elements in the array in teverse order (don't actually revers the array itself

// var arrayForprintReverse = [1,2,3,4];

// function printReverse() {
// 	arrayForprintReverse.reverse() 
// 		console.log(arrayForprintReverse);
// }

function printReverseSolution(arr) {
	for(var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

printReverseSolution([3,6,2,5]);

//Write a funtion isUniform() which takes an array as an argumen and returns true if all elements in the array are identical.

//***** isUniform *******

function isUniformSolution(arr) {
	var first = arr [0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] !== first) {
			return false
		}
	}
	return true;
}

isUniformSolution([1,1,1]);
isUniformSolution([1,1,3]);


// Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array.

//****** sumArray() ******


function sumArray(arr) {
	var total = 0;
	arr.forEach(function(element) {
		total += element;
	});
	return total;
	}


sumArray([1,2,3,4]);



//Write a funtion max() that accepts an array of numbers and returns the maximum number in the array
//use loop and variable that is going to store the max number and update variable if the current number in loop is greater than the previous variable.


function max(arr) {
	return Math.max.apply(null, arr);
}

var arr = [1,2,3,5];

// function maxSolution(arr){
// 	var max = arr[0];
// 	for(var i = 1; i < arr.length; i++) {
// 		if(arr[i] > max) {
// 			max = arr[i];
// 		}
// 	}
// 	return max;
// }









