const acmeDB = require( './db' );

const userDefinition = {
    name: acmeDB.Sequelize.STRING,
    isMgr: {type: acmeDB.Sequelize.BOOLEAN, defaultValue: false}
};

const userMethodDefinition = {
    classMethods: {
        managerRecords: function() {
            return this.findAll({ 
                where: {isMgr: true },
                order: [
                    ['name', 'ASC']
                ]
            })
        },
        teamRecords: function() {
            return this.findAll({
                order: [
                    ['name', 'ASC']
                ]
            })
        },
        findByName: function (selectedName) {
            return this.findOne({
                where: {name: selectedName}
            })
        }
    },
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
