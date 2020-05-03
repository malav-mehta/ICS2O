var output = document.getElementById("id01");

function calculateLeap() {
    var input = document.getElementById("year");
    year = Number(input.value);
    input.value = "";
    var FDiv = year % 4;
    var HDiv = year % 100;
    var FHDiv = year % 400;

    if (FDiv == 0) {
        if (HDiv != 0) {
            output.innerHTML = `Your input, ${year}: <p style="color:green">IS</p> a leap year.`;
        }

        else if (HDiv == 0) {
            if (FHDiv == 0) {
                output.innerHTML = `Your input, ${year}: <p style="color:green">IS</p> a leap year.`;
            }

            else {
                output.innerHTML = `Your input, ${year}: <p style="color:red">IS NOT</p> a leap year.`;
            }
        }

        else {
            output.innerHTML = `Your input, ${year}: <p style="color:red">IS NOT</p> a leap year.`;
        }
    }

    else {
        output.innerHTML = `Your input, ${year}: <p style="color:red">IS NOT</p> a leap year.`;
    }
}