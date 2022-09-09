const Product = require('../models/Product')
const {mutipleMongooseToObject} = require('../../until/mongoose')
class SiteController {
    //GET/
    index(req, res,next) {

        //-----------callback--------//
        // Product.find({}, function (err, Products,next) {
        //     if (!err) {
        //         res.json(Products);
        //         return;
        //     }
        //     next(err);
           
        // })
        //---------------------promise--------//
        Product.find({}).then(Products => 
            {   
                // Products = Products.map(Product=>Product.toObject()) //Tạo mảng mới để đẩy dữ liệu từ mongo
                //doi

                res.render('home',{Products:mutipleMongooseToObject(Products)})
            })
        .catch(next);
    }

    // show detail tin-tuc
    //GET/search
    search(req, res) {
        res.send('Search page');
    }

}


module.exports = new SiteController;