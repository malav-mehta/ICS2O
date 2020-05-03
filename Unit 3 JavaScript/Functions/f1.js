var output = document.getElementById("id01");
var input = document.getElementById("input");
var radius;
var area;

function getInput() {
	radius = Number(input.value);
	calculateArea(radius);
	input.value = "";
}

function calculateArea(r) {
	area = (Math.round((Math.PI * Math.pow(r, 2)) * 100)) / 100;
	output.innerHTML = `The area of the circle with a radius of ${radius} units is about ${area} units squared.`;
}