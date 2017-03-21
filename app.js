const express = require( 'express' );
const app = express();
const routes = require( './routes' );
const swig = require( 'swig' );
const bodyParser = require( 'body-parser' );
const path = require( 'path' );

swig.setDefaults({ cache: false });
app.set( 'view engine', 'html' );
app.engine( 'html', swig.renderFile );

app.use(bodyParser.json());

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/', routes);

module.exports = app;
