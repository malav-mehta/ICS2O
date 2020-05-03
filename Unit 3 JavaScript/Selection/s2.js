var toShake = document.getElementById("shake");
var out = document.getElementById("id02");
var count = 0;
var input = document.getElementById("input");
var yOp = 0;
var xOp = 1;
var yO;
var xO;

function clearValue() {
	input.value = "";
	out.innerHTML = "The output will appear here.";
}

function generateOutput() {
	var outp = Math.floor(8 * Math.random() + 1);
	
	switch (outp) {
		case 1:
			out.innerHTML = "My sources say absolutely.";
			break;
			
		case 2:
			out.innerHTML = "My sources say very likely.";
			break;
			
		case 3:
			out.innerHTML = "My sources say likely.";
			break;
			
		case 4:
			out.innerHTML = "My sources say possibly.";
			break;
			
		case 5:
			out.innerHTML = "My sources say maybe.";
			break;
			
		case 6:
			out.innerHTML = "My sources say unlikely.";
			break;
			
		case 7:
			out.innerHTML = "My sources say very unlikely.";
			break;
			
		case 8:
			out.innerHTML = "My sources say no.";
			break;
		
		default:
			out.innerHTML = "Error. Reload the page...";
			break;
	}
}

function shake() {
	
	generateOutput();
	
	if (count != 40) {
		count++;
		
		var y = Math.floor(30 * Math.random() + 1);
		var x = Math.floor(40 * Math.random() + 1);
		
		switch (yOp) {
			case 0:
				yO = "";
				yOp = 1;
				break;
			
			case 1:
				yO = "-";
				yOp = 0;
				break;
		}
		
		switch (xOp) {
			case 0:
				xO = "";
				xOp = 1;
				break;
			
			case 1:
				xO = "-";
				xOp = 0;
				break;
		}
		
		toShake.style.transform = `translateY(${yO}${y}px) translateX(${xO}${x}px)`;
		setTimeout(shake, 50);
	}
		
	else {
		count = 0;
		toShake.style.transform = `translateY(0px) translateX(0px)`;
	}
}