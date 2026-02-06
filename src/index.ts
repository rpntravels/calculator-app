const readline = require('readline');
const { Calculator } = require('./calculator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculator = new Calculator();

const promptUser = () => {
    rl.question('Enter operation (add, subtract, multiply, divide) and two numbers (e.g., add 1 2): ', (input) => {
        const [operation, num1, num2] = input.split(' ');
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        let result;
        switch (operation) {
            case 'add':
                result = calculator.add(number1, number2);
                break;
            case 'subtract':
                result = calculator.subtract(number1, number2);
                break;
            case 'multiply':
                result = calculator.multiply(number1, number2);
                break;
            case 'divide':
                result = calculator.divide(number1, number2);
                break;
            default:
                console.log('Invalid operation. Please try again.');
                promptUser();
                return;
        }

        console.log(`Result: ${result}`);
        promptUser();
    });
};

console.log('Welcome to the Calculator App!');
promptUser();