const firstName = "Malav";
const lastName = "Mehta";
const birthYear = 2003;

var currentYear = (new Date()).getFullYear();

var age = (currentYear - birthYear);

document.write(`My name is ${firstName} ${lastName}.<br>`);
document.write(`I was born in ${birthYear}.<br>`);
document.write(`I am ${age} years old.`);