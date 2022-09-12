const { model } = require("mongoose");
const Product = require('../models/Product')
const {mutipleMongooseToObject, mongooseToObject} = require('../../until/mongoose')

class meController
{
    //Get/me/products
    show(req, res,next) {

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

                 res.render('me/show',{Products:mutipleMongooseToObject(Products)})
                // res.render('me/show')
            })
        .catch(next);
    }

        //Get/me/products/:id/edit
       
        edit(req,res,next)
        {   
            Product.findById(req.params.id)
            .then(product =>res.render('me/edit',{product:mongooseToObject(product)}))
            .catch(next)
        }
        //[PUT]/me/id
        update(req,res,next)
        {
            Product.updateOne({_id:req.params.id},req.body)
            .then(()=>res.redirect('/me/products'))
            .catch(next)
        }
        //[DELETE] /me/id
        delete(req,res,next)
        {
            Product.deleteOne({_id:req.params.id},req.body)
            .then(()=>res.redirect('/me/products'))
            .catch(next)
        }
   

}
 module.exports = new meController;