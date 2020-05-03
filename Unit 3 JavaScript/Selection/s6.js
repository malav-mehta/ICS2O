var output = document.getElementById("output");
var question = document.getElementById("input");
var status = document.getElementById("prompt");
var button = document.getElementById("button");
var finalStatus = "Click the button below to start the game...<br>The objective is to answer as many math questions as you can.<br>Click <b>stop</b> at any time to end the game and get your results.</b>"
var correct;
var questions;
var answer;
var uAnswer;
var outQuestion;

function generateQuestion () {
    var op = Math.floor(Math.random() * 2 + 1);
    var n1 = Math.floor(Math.random() * 15 + 1);
    var n2 = Math.floor(Math.random() * 15 + 1);
    uAnswer = "";
    answer = ""

    questions++;

    if (op == 1) {
        answer = n1 + n2;
        question.setAttribute("placeholder", `${n1} + ${n2}`);
        question.value = "";
        outQuestion = `${n1} + ${n2}`;
    }

    else {
        answer = n1 - n2;
        question.setAttribute("placeholder", `${n1} - ${n2}`);
        question.value = "";
        outQuestion = `${n1} - ${n2}`;
    }
}

function startGame() {
    correct = 0;
    questions = 0;
    button.innerHTML = "Next question";
    button.setAttribute("onclick", "checkAnswer()")
    uAnswer = "";
    answer = ""

    generateQuestion();
}

function checkAnswer() {
    uAnswer = question.value;
    if (uAnswer == answer) {
        correct++;
        output.innerHTML += `<br><br><h4>q${questions}. ${outQuestion}<br>Your answer: ${uAnswer}<br>Correct answer: ${answer}</h4>`;
        generateQuestion();
    }

    else {
        output.innerHTML += `<br><br><h5>q${questions}. ${outQuestion}<br>Your answer: ${uAnswer}<br>Correct answer: ${answer}</h5>`;
        generateQuestion();
    }
}

function stopGame() {
    output.innerHTML += "<br><br><br>" + String(Math.ceil((correct/(questions -1 ))*100)) + "% succes rate."
    button.setAttribute("onclick", "clearValues()");
    button.innerHTML = "Clear";
}

function clearValues() {
    question.setAttribute("placeholder", "Start game to begin...");
    button.setAttribute("onclick", "startGame()");
    button.innerHTML = "Start game";
    output.innerHTML = "Start the game. Your results will appear here."
}