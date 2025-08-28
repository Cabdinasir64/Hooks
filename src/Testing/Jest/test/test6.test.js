const { addUser, getUserByName, getUsersInCity } = require('../jest6');

const users = [
    { name: 'Alice', age: 22, city: 'New York' },
    { name: 'Bob', age: 17, city: 'New York' },
    { name: 'Charlie', age: 30, city: 'Los Angeles' }
];

test('add new user to array', () => {
    const newUser = { name: 'David', age: 19, city: 'New York' };
    const result = addUser(users, newUser);
    expect(result).toEqual([...users, newUser]);
});

test('array contains Alice', () => {
    expect(users).toContainEqual({ name: 'Alice', age: 22, city: 'New York' });
});

test('array has 3 users', () => {
    expect(users).toHaveLength(3);
});

test('Alice object has property age 22', () => {
    const alice = getUserByName(users, 'Alice');
    expect(alice).toHaveProperty('age', 22);
});

test('users in New York', () => {
    const nyUsers = getUsersInCity(users, 'New York');
    expect(nyUsers).toEqual([
        { name: 'Alice', age: 22, city: 'New York' },
        { name: 'Bob', age: 17, city: 'New York' }
    ]);
});
