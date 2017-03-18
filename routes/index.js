const express = require( 'express' );
const router = express.Router();

app.get('/', (req, res, next) => {
    res.render('index', { title: 'Home' })
});

module.exports = router;
