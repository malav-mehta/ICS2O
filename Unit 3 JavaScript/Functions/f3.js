var output = document.getElementById("id01");
var n1, n2, n3;
var f1, f2;
var op1, op2;
var question;

function randomQ() {
    f1 = Math.floor(4 * Math.random() + 1);
    f2 = Math.floor(4 * Math.random() + 1);
    n1 = Math.floor(20 * Math.random() + 1);
    n2 = Math.floor(20 * Math.random() + 1);
    n3 = Math.floor(20 * Math.random() + 1);

    switch (f1) {
        case 1:
            op1 = "+";
            question = `${n1} ${op1} ${n2} `;
            break;
        
        case 2:
            op1 = "-";
            question = `${n1} ${op1} ${n2} `;
            break;

        case 3:
            op1 = "x";
            question = `${n1} ${op1} ${n2} `;
            break;

        case 4:
            op1 = "/";
            question = `${n1} ${op1} ${n2} `;
            break;
        
        default:
            op1="+";
            question = `${n1} ${op1} ${n2} `;
            break;
    }

    switch (f2) {
        case 1:
            op2 = "+";
            question += `${op2} ${n3}`;
            break;
        
        case 2:
            op2 = "-";
            question += `${op2} ${n3}`;
            break;

        case 3:
            op2 = "x";
            question += `${op2} ${n3}`;
            break;

        case 4:
            op2 = "/";
            question += `${op2} ${n3}`;
            break;
        
        default:
            op2="+";
            question += `${op2} ${n3}`;
            break;
    }

    output.innerHTML = question;
}