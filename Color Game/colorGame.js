var colors = generateRandomColors(6);

	var squares = document.querySelectorAll(".square");
	var pickedColor = pickColor();
	var colorDisplay = document.getElementById("colorDisplay");
	var messageDisplay = document.querySelector("#message");

	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		//add initiatal colors to squares
		squares[i].style.background = colors[i];

		//add click listeners
		squares[i].addEventListener("click", function(){
		// grab color of clicked square 
		var clickedColor = this.style.background;
		// compare to picked color
		if( clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!"		
			changeColors(clickedColor);
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again.";
		}
	
		})
	};

	function changeColors(color){
		//loop through all squares change to match the given color
		for (var i = 0; i < squares.length; i++) {
			squares[i].style.background = color;
		}
	}

	function pickColor(){
		var random = Math.floor(Math.random() * colors.length)
		return colors[random];
	}

	function generateRandomColors(num){
		//make array
		var arr = []
		//add num random colors to array
		for (var i = 0; i < num.length; i++) {
			//get random color and push into array

		}
		//return array
		return arr;
	}

	function randomColor(){
		//pick a red from 0-255
		var r =Math.floor(Math.random() * 256);

		// pick a green from 0-255
		var g =Math.floor(Math.random() * 256);

		// pick a blue from 0-255
		var b =Math.floor(Math.random() * 256);
		return "rgb(" + r + "," + g + "," + b + ")";
	}






