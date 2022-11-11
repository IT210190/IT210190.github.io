document.getElementById('display').innerHTML = 0;

let operator;
let result = 0;
let operatorUsed = false;
let firstNumber;
let secondNumber;

function newInput(character) {
    document.getElementById('display');
    if (display.value == undefined || display.value == 0) {
        display.innerHTML = '';
    }
    display.value = 1;
    switch (character) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            display.innerHTML += character;
            break;
        case 'C':
            display.innerHTML = 0;
            display.value = 0;
            firstNumber = 0;
            secondNumber = 0;
            operatorUsed = false;
            break;
        case 'b':
            let buffer = display.innerText;
            if (buffer.length == 1 || buffer == 0) {
                display.innerHTML = 0;
                display.value = 0;
            } else {

                display.innerHTML = '';
                for (let i = 0; i < buffer.length - 1; ++i) {
                    display.innerHTML += buffer.charAt(i);
                }
            }
            break;
        case '/':
        case '*':
        case '-':
        case '+':
            if (operatorUsed) {
                secondNumber = parseInt(display.innerText);
                firstNumber = handleMath(operator);
            } else {
                operatorUsed = true;
                firstNumber = parseInt(display.innerText);
            }
            operator = character;
            display.innerHTML = '0';
            display.value = 0;
            break;
        case '=':
            if (firstNumber == undefined) {
                result = parseInt(display.innerText);
            } else {
                secondNumber = parseInt(display.innerText);
                firstNumber = handleMath(operator);
                result = firstNumber;
            }
            display.innerHTML = result;
            break;
    }
}

function handleMath(operator) {
    if (operator == '+') {
        firstNumber += secondNumber;
    } else if (operator == '-') {
        firstNumber -= secondNumber;
    } else if (operator == '*') {
        firstNumber *= secondNumber;
    } else {
        firstNumber /= secondNumber;
    }

    return firstNumber;
}