const sum = require('../jest1');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3); 
});

test('adds 5 + 7 to equal 12', () => {
    expect(sum(5, 7)).toBe(12);
});

test('add 9 + 10 to equal 19', () => {
    expect(sum(9,10)).toBe(19);
})
