var button = document.querySelector("button");
var isPurple = false;	

	button.addEventListener("click", changeBackground);


 function changeBackground() {
		document.body.classList.toggle("backgroundActive");
};


// function changeBackground() {
// 	if(isPurple){
// 		document.body.style.background = "white";
// 		isPurple = false;
// 	} else {
// 		document.body.style.background = "purple";
// 		isPurple = true;
// 	}
// };


