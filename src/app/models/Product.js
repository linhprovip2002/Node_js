const mongoose = require('mongoose');
const  slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;



const Product = new Schema({
    
   // _id:{type:String, maxLength:255},
    nameProduct: {type:String, maxLength:255, required : true},
    parent_id:{type:String, maxLength:255},
    desciption: {type:String, maxLength:600},
    imgage: {type:String,maxLength:600},
    slug :{type:String, maxLength:255},
    videoID:{type:String, maxLength:255},
    slug: { type: String, slug: 'nameProduct' , unique:true }
  },{timestamps: true},this.collection);

  //add plugins
  mongoose.plugin(slug);
  Product.plugin(mongooseDelete, { overrideMethods: 'all' ,   deletedAt : true });

  module.exports = mongoose.model('Products',Product)