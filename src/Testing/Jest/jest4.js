function filterAdultUsers(users, city) {
    if (!Array.isArray(users) || !city) return [];
    return users.filter(user => user.age >= 18 && user.city === city);
}

module.exports = { filterAdultUsers };
