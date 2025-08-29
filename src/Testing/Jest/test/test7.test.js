const { add, subtract, multiply, divide, floatingSum } = require('../jest7');

test('add 5 + 3 should be greater than 7', () => {
    expect(add(5, 3)).toBeGreaterThan(7);
});

test('subtract 5 - 3 should be less than 5', () => {
    expect(subtract(5, 3)).toBeLessThan(5);
});

test('multiply 2 * 3 should be greater than or equal to 6', () => {
    expect(multiply(2, 3)).toBeGreaterThanOrEqual(6);
});

test('divide 6 / 3 should be less than or equal to 2', () => {
    expect(divide(6, 3)).toBeLessThanOrEqual(2);
});

test('floating sum 0.1 + 0.2 should be close to 0.3', () => {
    expect(floatingSum(0.1, 0.2)).toBeCloseTo(0.3);
});

test('divide by zero should throw error', () => {
    expect(() => divide(5, 0)).toThrow("Can't divide by zero");
});
