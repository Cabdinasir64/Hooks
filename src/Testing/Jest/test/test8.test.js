const { fetchUser, divide } = require('../jest8');

test('fetchUser with valid id resolves', async () => {
    await expect(fetchUser(1)).resolves.toEqual({ id: 1, name: 'Alice' });
});

test('fetchUser with invalid id rejects', async () => {
    await expect(fetchUser(99)).rejects.toThrow('User not found');
});

test('divide by zero throws error', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero');
});

test('divide 6 / 2 should equal 3', () => {
    expect(divide(6, 2)).toBe(3);
});
