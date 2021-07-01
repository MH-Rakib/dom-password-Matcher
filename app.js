const generateInput = document.getElementById("generateInput");
const generateBtn = document.getElementById("generateBtn");


const writeInput = document.getElementById("writeInput");
const calcButtonRow = document.getElementsByClassName("calc-button-row");
const submitBtn = document.getElementById("submitBtn");
const actionLeft = document.getElementById("actionLeft");


const matched = document.getElementById("matched");
const notMatched = document.getElementById("notMatched");

generateBtn.addEventListener("click", function (e) {
    const number = Math.round(Math.random() * 10000);
    generateInput.value = number;
});

function updateInput(inputCurrValue, targetDigit) {

    if (targetDigit == "C") {
        inputCurrValue.value = "0";
        return;
    }

    if (targetDigit == "<") {

        if (inputCurrValue.value == "") {
            inputCurrValue.value = "0";;
        }

        var number = parseFloat(inputCurrValue.value);
        var temp = number % 10;
        number -= temp;
        number = number / 10;
        inputCurrValue.value = number;
        return;
    }

    var digit = parseFloat(targetDigit);
    var currVal = parseFloat(inputCurrValue.value);
    var updatedValue = (currVal * 10) + digit;
    inputCurrValue.value = updatedValue;
}

function onClick(e) {
    const targetDigit = e.target.innerText;
    updateInput(writeInput, targetDigit);
}

function pinMatch(generatedInput, writtenInput) {
    var generated = parseFloat(generatedInput.value);
    var written = parseFloat(writtenInput.value);

    if (generated == written) {
        matched.style.display = "block";
        notMatched.style.display = "none";
    } else {
        notMatched.style.display = "block";
        matched.style.display = "nome";
    }
}


submitBtn.addEventListener("click", function () {
    var count = parseFloat(actionLeft.innerText);
    if (count >= 1) {
        pinMatch(generateInput, writeInput);

        if (count == 1) {
            submitBtn.style.background = "#a73b33";
        }
        actionLeft.innerText = count - 1;
    }
});

for (var i = 0; i < calcButtonRow.length; i++) {
    calcButtonRow[i].addEventListener("click", onClick);
};