function fetchUser(id) {
    return new Promise((resolve, reject) => {
        const users = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' }
        ];
        const user = users.find(u => u.id === id);
        setTimeout(() => {
            if (user) resolve(user);
            else reject(new Error('User not found'));
        }, 100);
    });
}

function divide(a, b) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
}

module.exports = { fetchUser, divide };
