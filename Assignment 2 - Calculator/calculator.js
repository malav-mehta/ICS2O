var ogQ = document.getElementById("input");
var calculate = document.getElementById("calculate");
var mrBtn = document.getElementById("mrBtn");
var sqrBtn = document.getElementById("sqrBtn");
var sqrtBtn = document.getElementById("sqrtBtn");
var fnBtn = document.getElementById("fnBtn");
var pcBtn = document.getElementById("pcBtn");
var angleStat = document.getElementById("angleStat");
var changeBtn = document.getElementById("changeBtn");
var prBtn = document.getElementById("prBtn");
var buttons = document.getElementsByTagName('button');

var memory = 0;
var verified = false;
var mode = 0;
var answer;

Array.prototype.forEach.call(buttons, function(b){
  b.addEventListener('click', createRipple);
})

function createRipple(e)
{
  if(this.getElementsByClassName('ripple').length > 0)
    {
      this.removeChild(this.childNodes[1]);
    }
  
  var circle = document.createElement('div');
  this.appendChild(circle);
  
  var d = Math.max(this.clientWidth, this.clientHeight);
  circle.style.width = circle.style.height = d + 'px';
  
  circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
  circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';
  
  circle.classList.add('ripple');
}

window.onkeypress = function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        evaluateValue();
    }
 }

ogQ.addEventListener("keyup", function(event) {
    event.preventDefault();
    
    if (event.keyCode === 13) {
        calculate.click();
    }
});

function changeType() {
    if (mode == 0) {
        mode = 1;
        angleStat.innerHTML = "DGR";
        changeBtn.innerHTML = "RAD";
    } else if (mode == 1) {
        mode = 0;
        angleStat.innerHTML = "RAD";
        changeBtn.innerHTML = "DGR";
    }
}

function getRad(dgr) {
    return dgr * (Math.PI / 180);
}

function getDgr(rad) {
    return rad * (180 / Math.PI);
}

function sinF() {
    if (mode == 0) {
        ogQ.value = Math.sin(eval(ogQ.value));
    } else {
        ogQ.value = Math.sin(getRad(eval(ogQ.value)));
    }
}

function cosF() {
    if (mode == 0) {
        ogQ.value = Math.cos(eval(ogQ.value));
    } else {
        ogQ.value = Math.cos(getRad(eval(ogQ.value)));
    }
}

function tanF() {
    if (mode == 0) {
        ogQ.value = Math.tan(eval(ogQ.value));
    } else {
        ogQ.value = Math.tan(getRad(eval(ogQ.value)));
    }
}

function sinHF() {
    if (mode == 0) {
        ogQ.value = Math.asin(eval(ogQ.value));
    } else {
        ogQ.value = getDgr(Math.asin((eval(ogQ.value))));
    }
}

function cosHF() {
    if (mode == 0) {
        ogQ.value = Math.acos(eval(ogQ.value));
    } else {
        ogQ.value = getDgr(Math.acos((eval(ogQ.value))));
    }
}

function tanHF() {
    if (mode == 0) {
        ogQ.value = Math.atan(eval(ogQ.value));
    } else {
        ogQ.value = getDgr(Math.atan((eval(ogQ.value))));
    }
}

function tenPower() {
    ogQ.value = Math.pow(10, eval(ogQ.value));
}

function mFunction(type) {
    switch (type) {
        case 0:
            memory += eval(uiQ);
            break;
        
        case 1:
            memory -= eval(uiQ);
            break;

        case 2:
            ogQ.value += ` ${memory} `;
            break;

        case 3:
            memory = 0;

        default:
            break;
    }
}

function backSpace() {
    ogQ.value = ogQ.value.substring(0, ogQ.value.length - 1);
}

function percentFunction() {
    answer = eval(ogQ.value) / 100;
    ogQ.value = answer;
}

function clearValue() {
    ogQ.value = "";
}

function reciprocalValue() {
    answer = eval(uiQ);
    answer = 1 / answer;
    ogQ.value = answer;
}

function addValue(val) {
    ogQ.value += val;
}

function rootValue() {
    answer = Math.sqrt(eval(ogQ.value));
    ogQ.value = answer;
}

function exponentValue(exponent) {
    answer = Math.pow(eval(ogQ.value), exponent);
    ogQ.value = answer;
}

function changeSign() {
    answer = eval(`-(${ogQ.value})`);
    ogQ.value = answer;
}

function evaluateValue() {
    answer = eval(ogQ.value);
    ogQ.value = answer;
}

function cubeRoot() {
    answer = Math.cbrt(eval(ogQ.value));
    ogQ.value = answer;
}

function roundValue() {
    answer = Math.round(eval(ogQ.value) * 100) / 100;
    ogQ.value = answer;
}
function randomNumb() {
    ogQ.value += Math.random();
}

function secondFunction() {
    mrBtn.innerHTML = "MC";
    mrBtn.setAttribute("onclick", "mFunction(3)");
    
    sqrBtn.innerHTML = "x³";
    sqrBtn.setAttribute("onclick", "exponentValue(3)");

    sqrtBtn.innerHTML = "∛x";
    sqrtBtn.setAttribute("onclick", "cubeRoot()");

    pcBtn.innerHTML = "Rnd";
    pcBtn.setAttribute("onclick", "roundValue()");
    
    prBtn.innerHTML = ")";
    prBtn.setAttribute("onclick", "addValue(`)`)");

    fnBtn.innerHTML = "1st";
    fnBtn.setAttribute("onclick", "primaryFunction()");
}

function primaryFunction() {
    mrBtn.innerHTML = "MR";
    mrBtn.setAttribute("onclick", "mFunction(2)");
    
    sqrBtn.innerHTML = "x²";
    sqrBtn.setAttribute("onclick", "exponentValue(2)");

    sqrtBtn.innerHTML = "√x";
    sqrtBtn.setAttribute("onclick", "rootValue()");

    pcBtn.innerHTML = "%";
    pcBtn.setAttribute("onclick", "percentFunction()");

    prBtn.innerHTML = "(";
    prBtn.setAttribute("onclick", "addValue(`(`)");

    fnBtn.innerHTML = "2nd";
    fnBtn.setAttribute("onclick", "secondFunction()");
}