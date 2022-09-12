const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const productsRouter = require('./products');

function route(app) {


    app.use('/news', newsRouter);

    app.use('/me', meRouter);

    app.use('/products', productsRouter)


    app.use('/', siteRouter);
    
}
module.exports = route;