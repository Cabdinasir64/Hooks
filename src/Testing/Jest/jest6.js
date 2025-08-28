function addUser(users, user) {
    if (!Array.isArray(users) || !user) return users;
    return [...users, user];
}

function getUserByName(users, name) {
    return users.find(u => u.name === name);
}

function getUsersInCity(users, city) {
    return users.filter(u => u.city === city);
}

module.exports = { addUser, getUserByName, getUsersInCity };
