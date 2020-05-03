const in1 = document.getElementById("in1");
const out1 = document.getElementById("out1");

const in2 = document.getElementById("in2");
const out2 = document.getElementById("out2");

const in3 = document.getElementById("in3");
const out3 = document.getElementById("out3");

const in4 = document.getElementById("in4");
const out4 = document.getElementById("out4");

var input; // all exercises
var password, attempts, charCount, random; // exercise 1
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //exercise 2
var progress, numLetters; // exercise 2 
var output, curLetter, charCount, replacement; // exercise 3 (and 4)
var words, curWord, wordCount; // exercise 4
const vowels = ["a", "e", "i", "o", "u"];

function func1a() {
    out1.innerHTML = `You have 5 attempts left.`;
    password = "";
    charCount = 0;

    while (charCount <= 7) {
        charCount++;

        if (charCount <= 5) {
            random = Math.round((Math.random() * 25) + 97);
            password += String.fromCharCode(random);
        } else {
            random = Math.round(Math.random() * 9);
            password += `${random}`;
        }
    }

    console.log(password);
    attempts = 0;
}

function func1b() {
    input = String(in1.value);
    in1.value = "";
    attempts++;

    if (input === password || attempts === 5) {
        out1.innerHTML = `The correct answer was <h3 style="color:green;">${password}</h3> which you got after ${attempts} attempt(s).`;
    } else {
        out1.innerHTML = `You incorrectly guessed <h3 style="color:red;">${input}</h3> You have ${5 - attempts} attempt(s) left.`;
    }
}

function func2() {
    input = in2.value;
    in2.value = "";
    progress = 0;
    numLetters = 0;

    while (progress < input.length) {
        if (letters.includes(input.toLowerCase().charAt(progress))) {
            numLetters++;
        }
        progress++;
    }

    out2.innerHTML = `There are ${numLetters} letters in your sentence, ${input}`;
}

function func3() {
    input = in3.value;
    in3.value = "";
    output = "";
    charCount = 0;

    while (charCount < input.length) {
        curLetter = input.charAt(charCount);
        replacement = "";

        switch (curLetter.toLowerCase()) {
            case "a":
                replacement = "4";
                break;

            case "e":
                replacement = "3";
                break;

            case "i":
                replacement = "1";
                break;

            case "o":
                replacement = "0";
                break;

            default:
                replacement = curLetter;
                break;
        }

        output += replacement;
        charCount++;
    }

    out3.innerHTML = output;
}

function func4() {
    input = in4.value;
    in4.value = "";
    output = "";
    words = [];
    words = input.split(" ");
    wordCount = 0;
    curWord = "";
    curLetter = "";

    while (wordCount < words.length) {
        curWord = words[wordCount];
        curLetter = curWord[0];
        if (vowels.includes(curLetter.toLowerCase())) {
            curWord += "ay ";
            output += curWord;
            curWord = "";
        } else {
            output += curWord.substring(1) + curLetter + "ay ";
        }
        wordCount = wordCount + 1;
    }

    out4.innerHTML = output;
}