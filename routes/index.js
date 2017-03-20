const express = require( 'express' );
const router = express.Router();
const acmeDB = require( '../db' );
const models = acmeDB.models;

router.get('/', (req, res, next) => {
    models.User.managerRecords()
        .then(_managers => {
            res.locals.managers = JSON.stringify(_managers);
        })
        .then(() => {
            return models.User.teamRecords()
        })
        .then(_teamRecs => {
            res.locals.teamRecs = _teamRecs;
        })
        .then(() => {
            res.render('index', { title: 'Home' })
        })
        .catch(err => console.log(err));
});

module.exports = router;
