const acmeDB = require( './db' );

const userDefinition = {
    name: acmeDB.Sequelize.STRING,
    isMgr: {type: acmeDB.Sequelize.BOOLEAN, allowNull: false, defaultValue: false}
};

const userMethodDefinition = {
    hooks: {
        beforeUpdate: function (user) {
            if (user.managerId) {
                console.log('user: ', user)
                //find manager by id, and then change the mng record.
            }
        }
    }
};

const User = acmeDB.define('user', userDefinition, userMethodDefinition);

module.exports = User;
