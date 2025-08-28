const { isAdult, getUser } = require('../jest5');

test('age 20 should be adult', () => {
    expect(isAdult(20)).toBeTruthy();
});

test('age 15 should not be adult', () => {
    expect(isAdult(15)).toBeFalsy();
});

test('age null should return null', () => {
    expect(isAdult(null)).toBeNull();
});

test('getUser with name returns object', () => {
    expect(getUser('Alice')).toBeDefined();
});

test('getUser without name returns undefined', () => {
    expect(getUser()).toBeUndefined();
});
