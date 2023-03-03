const display = document.querySelector('display');
const operateSelect = document.querySelector('equals');
const addSelect = document.querySelector('#add');
const subtractSelect = document.querySelector('#subtract');
const multiplySelect = document.querySelector('#multiply');
const divideSelect = document.querySelector('#divide');
const clear = document.querySelector('#clear');
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
// operations 
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;
// calculation
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

console.log(operate('add',1,2));
console.log(operate('subtract',1,2));
console.log(operate('multiply',1,2));
console.log(operate('divide',1,2));
