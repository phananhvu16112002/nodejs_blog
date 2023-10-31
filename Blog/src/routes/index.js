const newsRouter = require('./news');
const siteRouter = require('./site');
const cousesRouter = require('./courses');
function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', cousesRouter);
    app.use('/', siteRouter);
}

module.exports = route;
