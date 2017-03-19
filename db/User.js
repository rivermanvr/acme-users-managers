const acmeDB = require( './db' );

const userDefinition = {
    name: acmeDB.Sequelize.STRING,
    isMgr: {type: acmeDB.Sequelize.BOOLEAN, allowNull: false, defaultValue: false}
};

const userMethodDefinition = {

};

const User = acmeDB.define('user', userDefinition, userMethodDefinition);

module.exports = User;
