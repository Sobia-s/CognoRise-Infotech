const addToDisplay = (value) => {
    const display = document.getElementById('display');
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
};

const clearDisplay = () => {
    document.getElementById('display').value = '0';
};

const isValidExpression = (expression) => {
    return /^[0-9+\-*/.()x ]+$/.test(expression) && !/[\+\-\*/]{2,}/.test(expression);
};

const evaluateExpression = (expression) => {
    expression = expression.replace(/x/g, '*');

    if (!isValidExpression(expression)) {
        throw new Error('Invalid expression');
    }
    return Function(`'use strict'; return (${expression})`)();
};

const calculate = () => {
    const display = document.getElementById('display');
    try {
        const result = evaluateExpression(display.value);
        if (!isFinite(result)) {
            throw new Error('Division by zero');
        }
        display.value = result;
    } catch (error) {
        console.error("Calculation error:", error.message);
        display.value = 'Error';
    }
};








