const acmeDB = require( './db' );

const userDefinition = {
    name: acmeDB.Sequelize.STRING
};

const userMethodDefinition = {

};

const User = acmeDB.define('user', userDefinition, userMethodDefinition);

module.exports = User;
