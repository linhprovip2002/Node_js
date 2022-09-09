const express = require('express');
const route = require('.');
const router = express.Router();
  
   const productController =require('../app/controllers/productController');
   router.use('/store',productController.store);
      router.use('/create',productController.create);
      router.use('/:slug',productController.show);
//    newsController.index

    

module.exports =  router;
