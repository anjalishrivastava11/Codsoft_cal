const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let operand1 = 0;
let operand2 = 0;

// Function to handle number and operator button clicks
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            handleNumber(button.dataset.number);
        } else if (button.classList.contains('operator')) {
            handleOperator(button.dataset.operator);
        } else if (button.id === 'clear') {
            clearCalculator();
        } else if (button.id === 'equals') {
            calculateResult();
        }
    });
});

function handleNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function handleOperator(op) {
    if (currentInput !== '') {
        operand1 = parseFloat(currentInput);
        operator = op;
        currentInput = '';
        display.innerText = op;
    }
}

function calculateResult() {
    if (currentInput !== '') {
        operand2 = parseFloat(currentInput);
        let result = 0;
        if (operator === '+') result = operand1 + operand2;
        else if (operator === '-') result = operand1 - operand2;
        else if (operator === '*') result = operand1 * operand2;
        else if (operator === '/') result = operand1 / operand2;
        
        display.innerText = result;
        currentInput = result.toString();
        operator = '';
    }
}

function clearCalculator() {
    currentInput = '';
    operator = '';
    operand1 = 0;
    operand2 = 0;
    display.innerText = '0';
}
