const acmeDB = require( './db' );

const defineAttr = {
    name: {
        type: acmeDB.Sequelize.STRING,
        allowNull: false
    },
    isMgr: {
        type: acmeDB.Sequelize.BOOLEAN, 
        defaultValue: false
    }
};

const defineMethods = {
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
        },
        findById: function (selectedId) {
            return this.findOne({
                where: {id: selectedId}
            })
        },
    },
    hooks: {
        beforeUpdate: function (user) {
            if (user.isMgr === false) {
                user.update(
                    { managerId: null },
                    { where: { managerId: user.id }}
                    )
            }
        }
    }
};

const User = acmeDB.define('user', defineAttr, defineMethods);

module.exports = User;
