function introduce() {
  console.log("This program will calculate the arithmetic average (mean) of your grades. In order for the program to function properly, ensure that your input is a number. Thank you for using our service, and enjoy the calculator!");
}

function startAveragesCalculator() {
  introduce();
  var continueCalculator = "y";
  var gradeList = [];

  for (var i = 0; continueCalculator != "n"; i++) {
    var newNumber = Number(prompt("Enter grade number " + (i + 1) + ": "));

    gradeList.push(newNumber);

    continueCalculator = prompt("Do you want to add more grade? (y/n): ");
  }

  if (gradeList != []) {
    var total = 0;
    var outputString = "";
    for (var j = 0; j < gradeList.length; j++) {
      total += gradeList[j];
      outputString = outputString + "Your grade number " + (j+1) + " is " + gradeList[j] + ".\n";
    }

    average = total / gradeList.length
    console.log(outputString + "\n\nThe average is " + average + ".");
  }
}