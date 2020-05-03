function introduce() {
  console.log("\nWelcome to the Rectangle Perimeter and Area Calculator. To begin, simply click on start. The program will start in a loop, and you will be able to calculate the perimeter and the area of as many rectangles as you may wish for.\n");
}

function calculatePandA(userWidth, userHeight) {
  const P = 2 * (userWidth + userHeight);
  const A = userWidth * userHeight;
  console.log(`\nThe perimeter and the area of the rectangle with the your inputted dimensions (${userWidth} x ${userHeight}) are ${P} units and ${A} units squared respectively.\n\n`);
}
function startCalculator() {
  introduce();
  var continueProgram = "y";
  
  while (continueProgram != "n") {
    var userWidth = Number(prompt("What is the width: "));
    var userHeight = Number(prompt("What is the height: "));
    
    calculatePandA(userWidth, userHeight);

    continueProgram = prompt("Do you want to continue (y/n): ");
  }
}