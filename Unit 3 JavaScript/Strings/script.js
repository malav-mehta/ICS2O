const in1 = document.getElementById("in1");
const out1 = document.getElementById("out1");

const in2 = document.getElementById("in2");
const sb2 = document.getElementById("sb2");
const out2 = document.getElementById("out2");

const in3 = document.getElementById("in3");
const sb3 = document.getElementById("sb3");
const out3 = document.getElementById("out3");

const in4 = document.getElementById("in4");
const in5 = document.getElementById("in5");
const in6 = document.getElementById("in6");
const out4 = document.getElementById("out4");

var input, output, substring, len;
var str1, str2, str3;
const vowels = ["a", "e", "i", "o", "u", "y"];

function func1() {
    input = in1.value;
    in1.value = "";
    len = input.length;
    var firstChar = input.substring(0, 1);
    var secondChar = input.substring(1, 2);
    firstChar = firstChar.toLowerCase();
    secondChar = secondChar.toLowerCase();

    if (vowels.includes(firstChar)) {
        if (firstChar == "y" && vowels.includes(secondChar)) {
            out1.innerHTML = input + "ly <br> In this case, 'y' is not a vowel as it is followed by a vowel.";
        } else {
            out1.innerHTML = input.substring(1, len) + firstChar;
        }
    } else {
        out1.innerHTML = input + "ly";
    }
}

function func2() {
    input = in2.value.toLowerCase();
    in2.value = "";
    substring = sb2.value.toLowerCase();
    sb2.value = "";

    out2.innerHTML = `The input has ${input.length} characters, and the letter "${substring}" occurs first at position ${input.indexOf(substring) + 1} and last at position ${input.lastIndexOf(substring) + 1}.`

}

function func3() {
    input = in3.value;
    in3.value = "";
    substring = sb3.value;
    sb3.value = "";

    const letter = String.fromCharCode(Math.round((Math.random() * 254) + 1));

    if (input.includes(substring)) {
        out3.innerHTML = input.replace(substring, letter);
    } else {
        out3.innerHTML = `No output for "${input}".`;
    }
}

function func4() {
    str1 = in4.value;
    str2 = in5.value;
    str3 = in6.value;

    in4.value = "";
    in5.value = "";
    in6.value = "";

    var stringArray = [str1, str2, str3];
    stringArray.sort();
    output = "";

    for (i = 0; i < stringArray.length; i++) {
        output += stringArray[i] + "<br>";
    }

    out4.innerHTML = output;

}