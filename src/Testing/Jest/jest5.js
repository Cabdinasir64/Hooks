function isAdult(age) {
    if (age === null || age === undefined) return null;
    return age >= 18;
}

function getUser(name) {
    if (!name) return undefined;
    return { name };
}

module.exports = { isAdult, getUser };
