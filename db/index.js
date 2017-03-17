const acmeDB = require( './db' );

const sync = () => {
    return acmeDB.sync({ force: true });
};

const seed = () => {
    return sync()
};

module.exports = {seed, sync};
