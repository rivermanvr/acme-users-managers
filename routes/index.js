const express = require( 'express' );
const router = express.Router();
const acmeDB = require( '../db' );
const models = acmeDB.models;
const path = require( 'path' );

router.get('/', (req, res, next) => {
            res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/api/teams', (req, res, next) => {
    let managers, teamMembers;
    models.User.managerRecords()
        .then(_managers => {
            managers = _managers;
        })
        .then(() => {
            return models.User.teamRecords()
        })
        .then(_teamMembers => {
            teamMembers = _teamMembers;
        })
        .then(() => {
            res.send({ managers, teamMembers });
        })
        .catch(err => console.log(err));
});

router.put('/api/teams/:id/:mId', (req, res, next) => {
    models.User.assignMgr(req.params.id, req.params.mId)
        .then(() => {
            res.send();
        })
        .catch(err => console.log(err));
});

router.put('/api/managers/:id', (req, res, next) => {
    models.User.findUpdateMgrById(req.params.id)
        .then(() => {
            res.send();
        })
        .catch(err => console.log(err));
});

module.exports = router;
