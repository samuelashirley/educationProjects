function sing() {
	console.log ("Twinkle Twinkle...");
	console.log ("How I wonder....");
}

setInterval(sing, 1000);

setInterval(function(){
	console.log("I am an anonymous function!");
	console.log("This is awesome");
}, 2000);