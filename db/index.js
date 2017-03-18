const acmeDB = require( './db' );
const User = require( './User' );

const sync = () => {
    return acmeDB.sync({ force: true });
};

const addUsers = () => {
    const promiseArr = [];
    const user = ['Moe', 'Larry', 'Curly', 'Shep', 'Vince'];
    for (let i = 0; i < user.length; i++) {
        let name = user[i];
        promiseArr.push(User.create({ name }));
    }
    return Promise.all(promiseArr);
};

const seed = () => sync().then(() => addUsers());

module.exports = {models: { User }, seed, sync};
