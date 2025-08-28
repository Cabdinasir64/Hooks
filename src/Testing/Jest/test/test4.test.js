const { filterAdultUsers } = require('../jest4');

const users = [
    { name: 'Alice', age: 22, city: 'New York' },
    { name: 'john', age: 29, city: 'New York' },
    { name: 'mike', age: 42, city: 'New York' },
    { name: 'Bob', age: 17, city: 'New York' },
    { name: 'Charlie', age: 30, city: 'Los Angeles' }
];

test('filters adult users in New York', () => {
    const result = filterAdultUsers(users, 'New York');
    expect(result).toEqual([{ name: 'Alice', age: 22, city: 'New York' },
    { name: 'john', age: 29, city: 'New York' },
    { name: 'mike', age: 42, city: 'New York' }
    ]);
});

test('returns empty array if no users match', () => {
    const result = filterAdultUsers(users, 'Chicago');
    expect(result).toEqual([]);
});
