const { add, subtract, multiply, divide } = require('../jest9');

describe('Addition Tests', () => {
    test('5 + 3 = 8', () => {
        expect(add(5, 3)).toBe(8);
    });

    test('0 + 0 = 0', () => {
        expect(add(0, 0)).toBe(0);
    });
});

describe('Subtraction Tests', () => {
    test('5 - 3 = 2', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    test('3 - 5 = -2', () => {
        expect(subtract(3, 5)).toBe(-2);
    });
});

describe('Multiplication Tests', () => {
    test('2 * 3 = 6', () => {
        expect(multiply(2, 3)).toBe(6);
    });
});

describe('Division Tests', () => {
    test('6 / 2 = 3', () => {
        expect(divide(6, 2)).toBe(3);
    });

    test('divide by zero should throw error', () => {
        expect(() => divide(5, 0)).toThrow('Division by zero');
    });
});
