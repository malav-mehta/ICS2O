var output = document.getElementById("id01");
var slider = document.getElementById("age");
var ageOut = document.getElementById("rangeOut");
var distance = document.getElementById("distance");
var distanceOut = document.getElementById("distanceOut");
var rating = document.getElementById("rating");
var ratingOut = document.getElementById("ratingOut");

slider.oninput = function() {
    ageOut.value = this.value;
}
ageOut.oninput = function() {
    slider.value = this.value;
}

distance.oninput = function() {
    distanceOut.value = this.value;
}
distanceOut.oninput = function() {
    distance.value = this.value;
}

rating.oninput = function() {
    ratingOut.value = this.value;
}
ratingOut.oninput = function() {
    rating.value = this.value;
}

function parseInput() {
    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var age = document.getElementById("rangeOut").value;
    var birthday = document.getElementById("birthday").value;
    var grade = document.getElementById("grade").value;
    var gender = document.getElementById("gender").value;
    var distance = document.getElementById("distanceOut").value;
    var favClass = document.getElementById("class").value;
    var rating = document.getElementById("ratingOut").value;

    output.innerHTML = `Your name is ${fName} ${lName}, and you are ${age} years old.<br>
                        You were born on ${birthday}.<br>
                        You are a(n) ${gender}, in grade ${grade}.<br>
                        You live ${distance} kilometers away from Colonel By Secondary School, where you take your favorite class, ${favClass}.<br>
                        You gave this survey ${rating} out of 10, thank you!`
}