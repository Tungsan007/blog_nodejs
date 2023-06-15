const newsRouter = require('./news');
const SiteRouter = require('./sites')

function route(app) {
   app.use('/news', newsRouter);
   app.use('/', SiteRouter);
}

module.exports = route;