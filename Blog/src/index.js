const express = require('express');
const path = require('path');
const morgan = require('morgan');
// const handlebars = require('express-handlebars');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const hbs = require('handlebars');
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//Connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
//js -> server
app.use(express.json());

app.use(methodOverride('_method'));

//HTTP Logger
app.use(morgan('combined'));

//Template Engine
app.engine(
    'hbs',
    exphbs.engine({
        extname: '.hbs',
    }),

    hbs.registerHelper('sum', function (a, b) {
        return parseInt(a) + parseInt(b);
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Route Init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
