// function myForEach(arr, func) {
// 	//loop through array
// 	for(var i = 0; i < arr.length; i++){
// 		//call func for each ite in array
// 		func(arr[i]);
// 	}
// }

// var colors = ["red", "Orange", "Yellow"];

// myForEach(colors, alert);

Array.prototype.myForEach = function(func) {
	for(var i = 0; i < this.length; i++) {
		func(this[i]);
	}
}

var friends = ["charlie", "Dave", "maddy"];

friends.myForEach(function(name) {
	console.log("I love " + name );
})