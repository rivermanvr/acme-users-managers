const express = require( 'express' );
const router = express.Router();
const acmeDB = require( '../db' );
const models = acmeDB.models;

router.get('/', (req, res, next) => {
    models.User.managerRecords()
        .then(_managers => {
            res.locals.managers = _managers;
        })
        .then(() => {
            return models.User.teamRecords()
        })
        .then(_team => {
            res.locals.teamRecs = _team;
        })
        .then(() => {
            return models.User.findByName('Moe');
        })
        .then(_testName => {
            res.locals.testName = _testName;
        })
        .then(() => {
            res.render('index', { title: 'Home' })
        })
        .catch(err => console.log(err));
});

module.exports = router;
