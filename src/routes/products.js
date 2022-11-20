const express = require('express');
const route =  require('.');
const router = express.Router();
  
   const productController =require('../app/controllers/productController');
      router.post('/store',productController.store);
      router.get('/create',productController.create);
      router.get('/:slug',productController.show);
//    newsController.index

    

module.exports =  router;
