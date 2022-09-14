const express = require('express');
const route = require('.');
const router = express.Router();
  
   const meController =require('../app/controllers/meController');
      // router.use('/:slug',newsController.show);
//    newsController.index
      
      router.get('/products/:id/restore',meController.restore)
      
      router.get('/products/:id/edit',meController.edit)

      router.put('/:id',meController.update)
      
      router.get('/products/trash',meController.recycle)

      router.patch('/:id/restore',meController.restore)
      
      router.delete('/:id/destroy',meController.destroy)

      router.delete('/:id',meController.delete)
    
      router.get('/products',meController.show);
      

module.exports =  router;
