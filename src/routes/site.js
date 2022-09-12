const express = require('express');
const route = require('.');
const router = express.Router();
  
   const siteController =require('../app/controllers/SiteController');
    
//    newsController.index
   
      router.get('/search',siteController.search);
      
       router.get('/',siteController.index);
module.exports =  router;
