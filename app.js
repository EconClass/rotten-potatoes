// INITIAL STATE
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser'); // Initialize bodyParser
const reviews = require('./controllers/reviews'); //

// Parser and handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // override with POST having ?_method=DELETE or ?_method=PUT

module.exports = app

reviews(app)

// Listen
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
