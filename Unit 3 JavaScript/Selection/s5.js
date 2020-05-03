var output = document.getElementById("id01");
var input = document.getElementById("year");
var button = document.getElementById("inputSelector");
var number;
var guesses;
var answer;
var points;

function startGame() {
    number = Math.floor(10 * Math.random() + 1);
    console.log(number);
    input.setAttribute("placeholder", "Enter your first guess here...");
    input.value = "";
    button.setAttribute("onclick", "guessNumber()");
    button.innerHTML = "Did I guess right?";
    output.innerHTML = "Enter a guess to get started.";
    guesses = 1;
}

function guessNumber() {
    if (guesses != 4) {
        if (guesses == 1) {
            input.setAttribute("placeholder", "Enter your second guess here...");
            button.setAttribute("onclick", "guessNumber()");
            answer = input.value;
            input.value = "";

            if (answer == number) {
                output.innerHTML = `WOW! You got it on your first try! You get a 100 points (you can buy... satisfaction)!`;
                input.setAttribute("placeholder", "Click on the button to start the game...");
                button.setAttribute("onclick", "startGame()");
                input.value = "";
                button.innerHTML = ("Start game.");
            }

            else if (answer > number) {
                output.innerHTML = `Your first guess is too high. Try again!`;
            }

            else {
                output.innerHTML = `Your first guess is too low. Try again!`;
            }
        }

        else if (guesses == 2) {
            input.setAttribute("placeholder", "Enter your third guess here...");
            button.setAttribute("onclick", "guessNumber()");
            answer = input.value;
            input.value = "";

            if (answer == number) {
                output.innerHTML = `WOW! You got it on your second try! You get 50 points (you can buy... half of satisfaction)!`;
                input.setAttribute("placeholder", "Click on the button to start the game...");
                button.setAttribute("onclick", "startGame()");
                input.value = "";
                button.innerHTML = ("Start game.");
            }

            else if (answer > number) {
                output.innerHTML = `Your second guess is too high. Try again!`;
            }

            else {
                output.innerHTML = `Your second guess is too low. Try again!`;
            }
        }

        else {
            input.setAttribute("placeholder", "Click on the button to start the game...");
            button.setAttribute("onclick", "startGame()");
            button.innerHTML = ("Start game.");
            answer = input.value;
            input.value = "";

            if (answer == number) {
                output.innerHTML = `You got it... but you took too many tries. You get 0 points (you can buy... nothing)!`;
            }

            else {
                output.innerHTML = `The number was ${number}. Better luck next time!`;
            }
        }

        guesses++;
    }

    else {
        output.innerHTML = `There are no more guesses left...<br>You did not win anything.`
    }
}