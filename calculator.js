let display = document.getElementById('display');
let displayResult = document.getElementById('display-result');
let chosenOperator = null;
// const operateSelect = document.querySelector('#equals');
// const addSelect = document.querySelector('#add');
const subtractSelect = document.querySelector('#subtract');
// const multiplySelect = document.querySelector('#multiply');
// const divideSelect = document.querySelector('#divide');
const clear = document.querySelector('#clear');
const zero = document.querySelector('#zero');
// const one = document.querySelector('#one');
// const two = document.querySelector('#two');
// const three = document.querySelector('#three');
// const four = document.querySelector('#four');
// const five = document.querySelector('#five');
// const six = document.querySelector('#six');
// const seven = document.querySelector('#seven');
// const eight = document.querySelector('#eight');
// const nine = document.querySelector('#nine');
const numberContainer = document.querySelector('.number-container');
const remove = new AbortController(); // Disabling the effect of listener
// Operations 
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;
// Calculation
function operate(operator,a,b) {
    if (operator === 'add') {
        return add(a,b);
    }
    if (operator === 'subtract') {
        return subtract(a,b);
    }
    if (operator === 'multiply') {
        return multiply(a,b);
    }
    if (operator === 'divide') {
        return divide(a,b);
    }
};
// Event listener on container rather than per button
// Event delegation!
numberContainer.addEventListener('click', (e) => {
    // displaying the result
    if (e.target.matches('#equals')) {
        if (chosenOperator === 'add'){
            display.textContent = operate(chosenOperator,Number(displayResult.textContent),Number(display.textContent));
        }
        if (chosenOperator === 'subtract'){
            display.textContent = operate(chosenOperator,Number(displayResult.textContent),Number(display.textContent));
        }
        if (chosenOperator === 'multiply'){
            display.textContent = operate(chosenOperator,Number(displayResult.textContent),Number(display.textContent));
        }
        if (chosenOperator === 'divide'){
            display.textContent = operate(chosenOperator,Number(displayResult.textContent),Number(display.textContent));
        }
    }

    if (e.target.matches('#add')) {
        if (display.textContent === '0') {
            display.textContent += display.textContent;
        }
        displayResult.textContent = display.textContent;
        if (!display.textContent === '0') {
            display.textContent += displayResult;
        }
        display.textContent = 0;
        chosenOperator = 'add';
    }
    if (e.target.matches('#subtract')) {
        if (display.textContent === '0') {
            display.textContent = display.textContent;
        }
        displayResult.textContent = display.textContent;
        if (!display.textContent === '0') {
            display.textContent += displayResult;
        }
        display.textContent = 0;
        chosenOperator = 'subtract';
    }
    if (e.target.matches('#multiply')) {
        if (display.textContent === '0') {
            display.textContent = display.textContent;
        }
        displayResult.textContent = display.textContent;
        if (!display.textContent === '0') {
            display.textContent += displayResult;
        }
        display.textContent = 0;
        chosenOperator = 'multiply';
    }
    if (e.target.matches('#divide')) {
        if (display.textContent === '0') {
            display.textContent = display.textContent;
        }
        displayResult.textContent = display.textContent;
        if (!display.textContent === '0') {
            display.textContent += displayResult;
        }
        display.textContent = 0;
        chosenOperator = 'divide';
    }

    if (e.target.matches('#one')) {
        if (display.textContent === '0') {
            display.textContent = 1;
        }
        else if (display.textContent.length < 12 && display.textContent.length > 0) {
            display.textContent += 1;
        }
        if (display.textContent.length > 12) {
            remove.abort;
        }
    }
    if (e.target.matches('#two')) {
        if (display.textContent === '0') {
            display.textContent = 2;
        }
        else if (display.textContent.length < 12 && display.textContent.length > 0) {
            display.textContent += 2;
        }
        else {
            remove.abort;
        }
    }
    if (e.target.matches('#three')) {
        if (display.textContent === '0') {
            display.textContent = 3;
        }
        else if (display.textContent.length < 12 && display.textContent.length > 0) {
            display.textContent += 3;
        }
        else {
            remove.abort;
        }
    }
    if (e.target.matches('#four')) {
        if (display.textContent === '0') {
            display.textContent = 4;
        }
        else if (display.textContent.length < 12 && display.textContent.length > 0) {
            display.textContent += 4;
        }
        else {
            remove.abort;
        }
    }
    if (e.target.matches('#five')) {
        if (display.textContent === '0') {
            display.textContent = 5;
        }
        else if (display.textContent.length < 12 && display.textContent.length > 0) {
            display.textContent += 5;
        }
        else {
            remove.abort;
        }
    }
    if (e.target.matches('#six')) {
        if (display.textContent === '0') {
            display.textContent = 6;
        }
        else if (display.textContent.length < 12 && display.textContent.length > 0) {
            display.textContent += 6;
        }
        else {
            remove.abort;
        }
    }
    if (e.target.matches('#seven')) {
        if (display.textContent === '0') {
            display.textContent = 7;
        }
        else if (display.textContent.length < 12 && display.textContent.length > 0) {
            display.textContent += 7;
        }
        else {
            remove.abort;
        }
    }
    if (e.target.matches('#eight')) {
        if (display.textContent === '0') {
            display.textContent = 8;
        }
        else if (display.textContent.length < 12 && display.textContent.length > 0) {
            display.textContent += 8;
        }
        else {
            remove.abort;
        }
    }
    if (e.target.matches('#nine')) {
        if (display.textContent === '0') {
            display.textContent = 9;
        }
        else if (display.textContent.length < 12 && display.textContent.length > 0) {
            display.textContent += 9;
        }
        else {
            remove.abort;
        }
    }
    if (e.target.matches('#zero')) {
        if (display.textContent === '0') {
            display.textContent = 0;
        }
        else if (display.textContent.length < 12 && display.textContent.length > 0) {
            display.textContent += 0;
        }
        else {
            remove.abort;
        }
    }
});
