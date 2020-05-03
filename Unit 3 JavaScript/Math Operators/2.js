var output2 = document.getElementById("id02");
var q, a;

function getInput(question) {
    userAnswer = (prompt(question));
    return userAnswer;
}

function generateRandom() {
    // getting the function
    var operator = Math.floor(Math.random() * Math.floor(4));
    var number1 = Math.floor(Math.random() * Math.floor(16));
    var number2 = Math.floor(Math.random() * Math.floor(16));

    var question;
    var answer;

    if (operator === 0) {
        question = `${number1} + ${number2}`;
        answer = number1 + number2;
        q = question; a = answer;
    } else if (operator === 1) {
        question = `${number1} - ${number2}`;
        answer = number1 - number2;
        q = question; a = answer;
    } else if (operator === 2) {
        question = `${number1} ÷ ${number2}`;
        answer = number1 / number2; 
        q = question; a = answer;
    } else if (operator === 3) {
        question = `${number1} x ${number2}`;
        answer = number1 * number2; 
        q = question; a = answer;
    }
}

function formatTheResult(question, userAnswer, n) {
    var result = `<br><br>${n}. q: ${question}<br> a: ${userAnswer}`;
    return result;
}

function outputTheResult(result, type) {
    if (type === 2) {
        output2.innerHTML += `<h2>` + result + `</h2>`;
    } else if (type == 1) {
        output2.innerHTML += `<h3>` + result + `</h3>`;
    }
}

function generateQuestions() {
    console.log("here1")
    var quit = false;
    var questions = 0;
    var correct = 0;

    while (quit === false) {
        generateRandom();
        var uA = getInput(q);

        console.log(q);
        console.log(a);
        console.log(uA);

        if (uA === "STOP") {
            quit = true;
            break;
        } else {
            questions += 1;  
            uA = Number(uA);
            var type = 0;
            var outputAdd = formatTheResult(q, uA, questions)

            if (uA === a) {
                outputTheResult(outputAdd, 2);
                correct++;
            } else if (uA != a) {
                outputTheResult(outputAdd + `<br>correct answer: ${a}`, 1);
            }
        }   
    }

    output2.innerHTML += "<p1>" + String(Math.ceil((correct/questions)*100)) + "% succes rate.</p>"
}