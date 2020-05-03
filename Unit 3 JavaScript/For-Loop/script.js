const in1a = document.getElementById("in1a");
const in1b = document.getElementById("in1b");
const out1a = document.getElementById("out1a");

const in1c = document.getElementById("in1c");
const in1d = document.getElementById("in1d");
const out1b = document.getElementById("out1b");

const in1e = document.getElementById("in1e");
const in1f = document.getElementById("in1f");
const out1c = document.getElementById("out1c");

const in2a = document.getElementById("in2a");
const in2b = document.getElementById("in2b");
const out2 = document.getElementById("out2");

const in3 = document.getElementById("in3");
const out3 = document.getElementById("out3");

var num1, num2; // exercise 1
var sum; // exercise 2
var string, words; // exercise 3

function func1a() {
    num1 = in1a.value;
    num2 = in1b.value;

    out1a.innerHTML = "Your output is:<br><br>";

    for (let i = num1; i <= num2; i++) { // from lowest to highest
        out1a.innerHTML += i + "<br>";
    }
}

function func1b() {
    num1 = in1c.value;
    num2 = in1d.value;

    out1b.innerHTML = "The even numbers are:<br><br>";

    for (let i = num1; i <= num2; i++) {
        if ((i % 2) === 0) { // if number is divisible by two
            out1b.innerHTML += i + "<br>";
        }
    }
}

function func1c() {
    num1 = in1e.value;
    num2 = in1f.value;

    out1c.innerHTML = "The numbers in inverse order are :<br><br>";

    for (let i = num2; i >= num1; i--) { // starts from top, goes to bottom
        out1c.innerHTML += i + "<br>";
    }
}

function func2() {
    num1 = in2a.value;
    num2 = in2b.value;
    sum = 0;

    for (let i = num1; i <= num2; i++) {
        sum += Number(i); // adds all numbers in the range to outside variable sum
    }

    out2.innerHTML = `The sum of the numbers from ${num1} to ${num2} is ${sum}.`;
}

function func3() {
    string = in3.value;
    words = 0;

    if (string.length > 0) {
        for (let i = 0; i <= string.length; i++) {
            if (string[i] === " ") { // checks for space
                if (string[i] !== string[i+1]) {
                    words++; // adds count if there is a space that isn't "touching" another space
                }
            }
        }

        words++; // adds an extra to account for the last space (which accomodates for two characters)

    }

    out3.innerHTML = `There are ${words} words in your sentence.`;
}
