const acmeDB = require( './db' );
const User = require( './User' );

User.belongsTo(User, { as: 'manager' });
User.hasMany(User, { as: 'teamMember', foreignKey: 'managerId' });

const sync = () => acmeDB.sync({ force: true });

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
    //decided to start things with no managers
    // .then((userRecords) => {
    //     const [moe, larry, curly, shep, vince] = userRecords;
    //     return Promise.all([
    //         larry.setManager(moe.id),
    //         moe.addTeamMember(vince.id),
    //         curly.addTeamMember(shep.id)
    //     ])
    // });

module.exports = {models: { User }, seed, sync};
