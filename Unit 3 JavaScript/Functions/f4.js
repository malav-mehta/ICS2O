var output = document.getElementById("id01");
var inpL = document.getElementById("length");
var inpW = document.getElementById("width");
var l, w;
var s
var perimeter, area;

function calculatePerimeter(length, width) {
    var p = 2 * (length + width);
    return p;
}

function calculateArea(length, width) {
    var a = length * width;
    return a;
}

function optimiseValues(a) {
    var optimisedSide = (Math.floor(Math.sqrt(a) * 100)) / 100;
    return optimisedSide;
}

function parseInput() {
    l = Number(inpL.value);
    w = Number(inpW.value);
    inpL.value = "";
    inpW.value = "";

    perimeter = calculatePerimeter(l, w);
    area = calculateArea(l, w);
    s = optimiseValues(area);

    output.innerHTML = `<h3>For your inputted values, length: ${l} units and width: ${w} units, the following calculations can be made:</h3>
                        <br><br><br> The perimeter is <h4>${perimeter} units (2 x (l + w)).</h4>
                        <br><br><br> The area is <h4>${area} units squared (l x w).</h4>
                        <br><br><br> The optimised length and width for the above area (${area} units squared) are <h4>${s} x ${s} units</h4> and will produce the lowest perimeter for this given area.`
}