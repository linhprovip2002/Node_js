const express = require('express');
const route = require('.');
const router = express.Router();
  
   const meController =require('../app/controllers/meController');
      // router.use('/:slug',newsController.show);
//    newsController.index
      router.get('/products/:id/edit',meController.edit)

      router.put('/:id',meController.update)

      router.delete('/:id',meController.delete)
    
      router.get('/products',meController.show);
      

module.exports =  router;
