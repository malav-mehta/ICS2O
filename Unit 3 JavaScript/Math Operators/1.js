var output = document.getElementById("id01");

function outputResult(result) {
    output.innerHTML = result;
}

function formatResult(c, q, d, n, p) {
    var result = `Your input of ${c} cents can be formed with ${q}Q (quarters), ${d}D (dimes), ${n}N (nickels) and ${p}P (pennies).`;
    return result;
}

function getInput() {
    var c = Number(prompt("Please enter below the money that needs to be converted in CENTS!"));
    return c;
}

function changeCurrency() {
    var c = getInput();

    var q1 = c % 25;
    var q = (c - q1) / 25;

    var d1 = q1 % 10;
    var d = (q1 - d1) / 10;

    var n1 = d1 % 5;
    var n = (d1 - n1) / 5;

    var p1 = n1 % 1;
    var p = (n1 - p1) / 1;
    console.log(p);
    console.log(q, d, n, p);

    var output = formatResult(c, q, d, n, p);
    console.log(output);
    outputResult(output);
}