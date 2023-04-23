var reel1 = document.getElementById("reel1");
var reel2 = document.getElementById("reel2");
var reel3 = document.getElementById("reel3");

var images = ["carota.jfif", "cipo.jfif", "melanzana.jpg"];

function spin() {
	var random1 = Math.floor(Math.random() * images.length);
	var random2 = Math.floor(Math.random() * images.length);
	var random3 = Math.floor(Math.random() * images.length);
	reel1.src = images[random1];
	reel2.src = images[random2]; 
	reel3.src = images[random3];
	
	if (random1 === random2 && random2 === random3) {
		alert("You won!");
	}
}

function game(){
	window.location.href = "4444444444.html";
}