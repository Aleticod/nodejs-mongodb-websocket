const store = require('./store');

function addUser (name) {
    if (!name) {
        return Promise.reject('Ivalid name');
    }
    const user = {
        name: name
    };
    return store.add(user);
}

function getUsers(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    })
}
module.exports = {
    addUser,
    getUsers,
}