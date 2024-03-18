// Declaring global variable

var x = 0;

// Declaring local variable

let y = 0;

var btnCompute = document.querySelector("#compute");
var txtFirstNumber = document.querySelector("#first-number");
var txtSecondNumber = document.querySelector("#second-number");
var txtSum = document.querySelector("#sum");

btnCompute.addEventListener("click", function(){
    let fn = parseFloat(txtFirstNumber.value);
    let sn = parseFloat(txtSecondNumber.value);
    let sum = fn + sn;
    // For displaying in the console
    console.log(sum);
    txtSum.value = sum;
})