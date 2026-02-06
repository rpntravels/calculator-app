import { Calculator } from '../src/calculator';

describe('Calculator', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('adds two numbers', () => {
        expect(calculator.add(1, 2)).toBe(3);
        expect(calculator.add(-1, -1)).toBe(-2);
        expect(calculator.add(-1, 1)).toBe(0);
    });

    test('subtracts two numbers', () => {
        expect(calculator.subtract(2, 1)).toBe(1);
        expect(calculator.subtract(-1, -1)).toBe(0);
        expect(calculator.subtract(1, -1)).toBe(2);
    });

    test('multiplies two numbers', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(-1, -1)).toBe(1);
        expect(calculator.multiply(-1, 1)).toBe(-1);
    });

    test('divides two numbers', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(-1, -1)).toBe(1);
        expect(calculator.divide(-1, 1)).toBe(-1);
    });

    test('throws error when dividing by zero', () => {
        expect(() => calculator.divide(1, 0)).toThrow('Cannot divide by zero');
    });
});