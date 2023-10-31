const express = require('express');
const path = require('path');
const morgan = require('morgan');
// const handlebars = require('express-handlebars');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
//js -> server
app.use(express.json());

//HTTP Logger
app.use(morgan('combined'));

//Template Engine
app.engine(
    'hbs',
    exphbs.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

//Route Init
route(app);

  app.listen( port, () => {
              console.log(`Example app listening on port ${port}`);
  });
