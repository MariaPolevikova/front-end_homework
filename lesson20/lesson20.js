

let currentValue = '0';
let storedValue = 0;
let currentOperation = null;
const mainDisplay = document.getElementById('main_display');
const historyDisplay = document.getElementById('history_display');

function updateDisplay() {
    mainDisplay.value = currentValue;
}


function addDigit(digit) {
    if (currentValue === '0') {
        currentValue = digit;
    } else {
        currentValue += digit;
    }
    updateDisplay();
}


function setOperation(op) {
    if (currentValue === '0' && storedValue === 0) return;

    if (currentOperation !== null) {
        calculate();
    }

    storedValue = parseInt(currentValue);
    currentOperation = op;
    currentValue = '0';
    historyDisplay.textContent = `${storedValue} ${op}`;
}


function calculate() {
    if (currentOperation === null) return;

    const currentNum = parseInt(currentValue);
    let result;

    switch (currentOperation) {
        case '+':
            result = storedValue + currentNum;
            break;
        case '-':
            result = storedValue - currentNum;
            break;
        case '*':
            result = storedValue * currentNum;
            break;
        case '/':
            result = currentNum !== 0 ? Math.floor(storedValue / currentNum) : 0;
            break;
        default:
            return;
    }

    currentValue = result.toString();
    currentOperation = null;
    historyDisplay.textContent += ` ${currentNum} = ${currentValue}`;
    updateDisplay();
}


function clearCalc() {
    currentValue = '0';
    storedValue = 0;
    currentOperation = null;
    historyDisplay.textContent = '';
    updateDisplay();
}


updateDisplay();