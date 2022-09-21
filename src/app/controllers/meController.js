const { model } = require("mongoose");
const Product = require('../models/Product')
const { mutipleMongooseToObject, mongooseToObject } = require('../../until/mongoose');
const { render } = require("node-sass");

class meController {
    //Get/me/products
    show(req, res, next) {

        //-----------callback--------//
        // Product.find({}, function (err, Products,next) {
        //     if (!err) {
        //         res.json(Products);
        //         return;
        //     }
        //     next(err);

        // })


        //asynchronous 
        Promise.all([Product.find({}), Product.countDocumentsDeleted()])
            .then(([Products, deleteProducts]) => {
                res.render('me/show', {
                    deleteProducts,
                    Products: mutipleMongooseToObject(Products)
                })
            })
            .catch()


        //---------------------promise--------//
        // Product.find({}).then(Products => {



        //     // Products = Products.map(Product=>Product.toObject()) //Tạo mảng mới để đẩy dữ liệu từ mongo
        //     //doi

        //     res.render('me/show', { Products: mutipleMongooseToObject(Products) });
        // })
        //     .catch(next);



        //get the number of deleted elements
        // Product.countDocumentsDeleted()
        //     .then((deleteProducts) => {
        //         console.log(deleteProducts);
        //     })
        //     .catch(next);
    }

    //Get/me/products/:id/edit

    edit(req, res, next) {
        Product.findById(req.params.id)
            .then(product => res.render('me/edit', { product: mongooseToObject(product) }))
            .catch(next)
    }
    //[PUT]/me/id
    update(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/products'))
            .catch(next)
    }
    //[DELETE] /me/id
    delete(req, res, next) {
        Product.delete({ _id: req.params.id })
            .then(() => res.redirect('/me/products'))
            .catch(next)
    }
    //[Get]//me/products/trash
    recycle(req, res, next) {
        //    res.render('me/trash');
        Product.findDeleted({})
            .then(Products => res.render('me/trash', { Products: mutipleMongooseToObject(Products) }))
            .catch(next);
    }
    //[PATCH] /products/:id/restore
    restore(req, res, next) {
        Product.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[DELETE] /me/id/destroy
    destroy(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[POST] /products/handle-form-action
    handleFormAction(req, res, next) {

        
        switch (req.body.action) {
            case 'delete':
                Product.delete({ _id: {$in :req.body.productID} })
                    .then(() => res.redirect('/me/products'))
                    .catch(next)
                break;
            
            default: req.json({ message: 'Action invalid!' });
        }

    }
    //
    restoreAll(req,res,next)
    {
        Product.restore({ _id: {$in :req.body.productID} })
        .then(()=>res.redirect('back'))
        .catch(next)
    }
}
module.exports = new meController;