let operand1 = document.getElementById('display');
let operand2 = document.getElementById('display-result');
let dNum = 0;
let rNum = 0;
let result = 0;
let textNum = '';
let chosenOperator = '';
const numberContainer = document.querySelector('.number-container');
// Operations 
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;
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
    textNum = '';
    chosenOperator = '';
    operand1.textContent = '';
    operand2.textContent = '';
}
// Event listener on container rather than per button
// Event delegation!
numberContainer.addEventListener('click', (e) => {
    // Displaying the result
    const target = e.target;
    if (target.matches('#zero')) {
        textNum = display(0);
    } if (target.matches('#one')) {
        textNum = display(1);
    } if (target.matches('#two')) {
        textNum = display(2);
    } if (target.matches('#three')) {
        textNum = display(3);
    } if (target.matches('#four')) {
        textNum = display(4);
    } if (target.matches('#five')) {
        textNum = display(5);
    } if (target.matches('#six')) {
        textNum = display(6);
    } if (target.matches('#seven')) {
        textNum = display(7);
    } if (target.matches('#eight')) {
        textNum = display(8);
    } if (target.matches('#nine')) {
        textNum = display(9);
    } if (target.matches('#clear')) {
        clear();
    } if (target.matches('#equals')) {
        rNum = Number(textNum);
        result = operate(chosenOperator,dNum,rNum);
        operand2.textContent += rNum; // adding 2nd number to 2nd display
        operand1.textContent = '';
        console.log(chosenOperator,dNum,rNum,result);
        display(result);
    } if (target.matches('#add')) {
        // should not evaluate more than a single pair of numbers how??? check if operator is not empty??
        if (chosenOperator !== '') {
            rNum = Number(textNum);
            result = operate(chosenOperator,dNum,rNum);
            operand2.textContent = result;
            dNum = result;
            console.log(dNum)
            chosenOperator = '';
            operand1.textContent = '';
        } else if (chosenOperator === '') {
            chosenOperator = 'add';
            dNum = Number(textNum);
            operand2.textContent += textNum + ' + ';
            operand1.textContent = '';
        }
    } if (target.matches('#subtract')) {
        chosenOperator = 'subtract';
        dNum = Number(textNum)
        operand2.textContent += textNum + ' - ';
        operand1.textContent = '';
    } if (target.matches('#multiply')) {
        chosenOperator = 'multiply';
        dNum = Number(textNum)
        operand2.textContent += textNum + ' * ';
        operand1.textContent = '';
    } if (target.matches('#divide')) {
        chosenOperator = 'divide';
        dNum = Number(textNum)
        operand2.textContent += textNum + ' / ';
        operand1.textContent = '';
    }   
});