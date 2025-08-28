const capitalize = require('../jest2'); 

test('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('returns empty string if input is empty', () => {
    expect(capitalize('')).toBe('');
});

test('does not change first letter if already capital', () => {
    expect(capitalize('World')).toBe('World');
});
