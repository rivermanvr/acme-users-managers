const express = require( 'express' );
const router = express.Router();
const acmeDB = require( '../db' );
const models = acmeDB.models;
const path = require( 'path' );

router.get('/', (req, res, next) => {
            res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/api/teams', (req, res, next) => {
    models.User.managerRecords()
        .then(_managers => {
            res.locals.managers = _managers;
        })
        .then(() => {
            return models.User.teamRecords()
        })
        .then(_teamMembers => {
            res.locals.teamMembers = _teamMembers;
        })
        .then(() => {
            res.send({ title: 'Home' });
        })
        .catch(err => console.log(err));
});

module.exports = router;
