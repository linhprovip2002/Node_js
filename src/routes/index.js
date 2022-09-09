const newsRouter =require('./news');
const siteRouter = require('./site');
const productsRouter = require('./products');

function route(app)
{   
    
    app.use('/products',productsRouter)

    app.use('/news', newsRouter);
    

    app.use('/', siteRouter);
   
}
module.exports = route;