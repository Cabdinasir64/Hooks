const getEvenNumbers = require('../jest3');

test('returns even numbers from [1,2,3,4,5]', () => {
    expect(getEvenNumbers([1,2,3,4,5])).toEqual([2,4]);
});

test('returns empty array if no even numbers', () => {
    expect(getEvenNumbers([1,3,5])).toEqual([]);
});

test('works with empty array', () => {
    expect(getEvenNumbers([])).toEqual([]);
});
