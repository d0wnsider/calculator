let operand1 = document.getElementById('display');
let operand2 = document.getElementById('display-result');
let dNum = 0;
let rNum = 0;
let result = 0;
let textNum = '';
let chosenOperator = '';
let stop = null;
const numberContainer = document.querySelector('.number-container');
const disableButton = new AbortController(); // disable the effect of listener for digits only
// Operations 
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;
const modulo = (a,b) => a % b;
// Calculation
function operate(operator,a,b) {
    if (operator === 'add') {
        return add(a,b);
    }if (operator === 'subtract') {
        return subtract(a,b);
    }if (operator === 'multiply') {
        return multiply(a,b);
    }if (operator === 'divide') {
        return divide(a,b);
    }if (operator === 'modulo') {
        return modulo(a,b);
    }
}
function display(num) {
    return operand1.textContent += num;
}
function display2(a) {
    operand2.textContent += textNum + a;
}
function clear() {
    dNum = 0;
    rNum = 0;
    result = '';
    textNum = '';
    chosenOperator = '';
    operand1.textContent = '';
    operand2.textContent = '';
}
function roundUp (num) {
    return Math.round(num * 10) / 10;
}
function delayedMessage() { // clearing 2 seconds of huh?
    operand1.textContent = '';
    clearInterval(stop);
}
function deleteChar(str) {
    return operand1.textContent = str.slice(0, -1);
}
function eNotation(result) { // if numbers displaying is more than 9 digits 
    return `1e+${Number(String(result).length)}`;
}
// Event listener on container rather than per button
// Event delegation!
numberContainer.addEventListener('click', (e) => {
    // Displaying the result
    const target = e.target;
    if (operand1.textContent.includes('e') || operand2.textContent.includes('e')) {
        clear();
    } if (target.matches('#zero')) {
        if (operand1.textContent.length < 12) {
            textNum = display(0);
        }
        disableButton.abort;
    } if (target.matches('#one')) {
        if (operand1.textContent.length < 12) {
            textNum = display(1);
        }
        disableButton.abort;
    } if (target.matches('#two')) {
        if (operand1.textContent.length < 12) {
            textNum = display(2);
        }
        disableButton.abort;
    } if (target.matches('#three')) {
        if (operand1.textContent.length < 12) {
            textNum = display(3);
        }
        disableButton.abort;
    } if (target.matches('#four')) {
        if (operand1.textContent.length < 12) {
            textNum = display(4);
        }
        disableButton.abort;
    } if (target.matches('#five')) {
        if (operand1.textContent.length < 12) {
            textNum = display(5);
        }
        disableButton.abort;
    } if (target.matches('#six')) {
        if (operand1.textContent.length < 12) {
            textNum = display(6);
        }
        disableButton.abort;
    } if (target.matches('#seven')) {
        if (operand1.textContent.length < 12) {
            textNum = display(7);
        }
        disableButton.abort;
    } if (target.matches('#eight')) {
        if (operand1.textContent.length < 12) {
            textNum = display(8);
        }
        disableButton.abort;
    } if (target.matches('#nine')) {
        if (operand1.textContent.length < 12) {
            textNum = display(9);
        }
        disableButton.abort;
    } if (target.matches('#clear')) {
        clear();
    } if (target.matches('#delete')) {
        textNum = deleteChar(textNum);
        console.log(textNum);
    } if (target.matches('#dot')) {
        if (!operand1.textContent.includes('.')) {
            textNum = display('.'); 
        }
        disableButton.abort;
    } if (target.matches('#equals')) {
        rNum = Number(textNum);
        if (rNum === 0){
            operand1.textContent = `huh?!?!?!`;
            stop = setInterval(delayedMessage,2000);
        }
        if (dNum && chosenOperator && rNum) {
            result = roundUp(operate(chosenOperator,dNum,rNum));
            operand2.textContent += textNum; // how to not add the second time?
            operand1.textContent = '';
            display(result);
            if (operand1.textContent.length > 12) {
                operand1.textContent = eNotation(result);
            }
        }
    } if (target.matches('#add')) {
        // should not evaluate more than a single pair of numbers how??? check if operator is not empty??
        if (chosenOperator !== '') {
            rNum = Number(textNum);
            result = roundUp(operate(chosenOperator,dNum,rNum));
            chosenOperator = 'add';
            operand2.textContent = result;
            operand2.textContent += ' + ';
            dNum = result;
            operand1.textContent = '';
        } else if (chosenOperator === '') {
            chosenOperator = 'add';
            dNum = Number(textNum);
            operand2.textContent += textNum + ' + ';
            operand1.textContent = '';
        }
    } if (target.matches('#subtract')) {
        if (chosenOperator !== '') {
            rNum = Number(textNum);
            result = roundUp(operate(chosenOperator,dNum,rNum));
            chosenOperator = 'subtract';
            operand2.textContent = result;
            operand2.textContent += ' - ';
            dNum = result;
            operand1.textContent = '';
        } else if (chosenOperator === '') {
            chosenOperator = 'subtract';
            dNum = Number(textNum);
            operand2.textContent += textNum + ' - ';
            operand1.textContent = '';
        }
    } if (target.matches('#multiply')) {
        if (chosenOperator !== '') {
            rNum = Number(textNum);
            result = roundUp(operate(chosenOperator,dNum,rNum));
            chosenOperator = 'multiply';
            operand2.textContent = result;
            operand2.textContent += ' * ';
            dNum = result;
            operand1.textContent = '';
        } else if (chosenOperator === '') {
            chosenOperator = 'multiply';
            dNum = Number(textNum);
            operand2.textContent += textNum + ' * ';
            operand1.textContent = '';
        }
    } if (target.matches('#divide')) {
        if (chosenOperator !== '') {
            rNum = Number(textNum);
            result = roundUp(operate(chosenOperator,dNum,rNum));
            chosenOperator = 'divide';
            operand2.textContent = result;
            operand2.textContent += ' / ';
            dNum = result;
            operand1.textContent = '';
        } else if (chosenOperator === '') {
            chosenOperator = 'divide';
            dNum = Number(textNum);
            operand2.textContent += textNum + ' / ';
            operand1.textContent = '';
        }
    } if (target.matches('#modulo')) {
        if (chosenOperator !== '') {
            rNum = Number(textNum);
            result = roundUp(operate(chosenOperator,dNum,rNum));
            chosenOperator = 'modulo';
            operand2.textContent = result;
            operand2.textContent += ' % ';
            dNum = result;
            operand1.textContent = '';
        } else if (chosenOperator === '') {
            chosenOperator = 'modulo';
            dNum = Number(textNum);
            operand2.textContent += textNum + ' % ';
            operand1.textContent = '';
        }
    }
});