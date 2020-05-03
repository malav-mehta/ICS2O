var x = document.getElementById("id01");
var input = document.getElementById("input");

function calculateScore() {
	var percent = input.value;
	input.value = "";
	
	if (percent > 100) {
		x.innerHTML = `You entered ${percent}, which is an INVALID INPUT`;
	}
	
	else if (percent == 100) {
		x.innerHTML = `Your percent of ${percent} gives you a 4++. Great work!`;
	}
	
	else if (percent >= 80) {
		x.innerHTML = `Your percent of ${percent} gives you a 4. Good work!`;
	}
	
	else if (percent >= 70) {
		x.innerHTML = `Your percent of ${percent} gives you a 3. Good effort!`;
	}
	
	else if (percent >= 60) {
		x.innerHTML = `Your percent of ${percent} gives you a 2. You are on the right track!`;
	}
	
	else if (percent >= 50) {
		x.innerHTML = `Your percent of ${percent} gives you a 1. Keep trying!`;
	}
	
	else if (percent < 50 && percent >= 0) {
		x.innerHTML = `Your percent of ${percent} gives you a R. Everyone has bad days!`;
	}
	
	else {
		x.innerHTML = `You entered ${percent}, which is an INVALID INPUT`;
	}
}
