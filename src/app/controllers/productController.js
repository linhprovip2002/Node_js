const Product = require('../models/Product')
const { mutipleMongooseToObject } = require('../../until/mongoose')
const {mongooseToObject} = require('../../until/mongoose')
class productController {
    


     //GET/product/create
     create(req,res,next)
     {
        res.render('Products/create');
     }

      //POST/product/store
      store(req,res,next) 
      {  
        const formData = req.body;
        formData.imgage =`https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
         const product = new Product(formData);
         product.save().then(()=>res.redirect('/')).catch(console.error())
        

      }



    // show detail tin-tuc
    //GET/product/:slug
    show(req, res, next) {
        // res.send('Show page'+ req.params.slug);
        Product.findOne({ slug: req.params.slug })
            .then(product =>
                res.render('Products/detailProduct',{product:mongooseToObject(product)}))

            .catch(next)

    }

     //GET/product/:slug


}


module.exports = new productController;