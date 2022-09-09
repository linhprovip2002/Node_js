const mongoose = require('mongoose');
const  slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const Product = new Schema({
    
    
    nameProduct: {type:String, maxLength:255, required : true},
    parent_id:{type:String, maxLength:255},
    desciption: {type:String, maxLength:600},
    imgage: {type:String,maxLength:600},
    slug :{type:String, maxLength:255},
    videoID:{type:String, maxLength:255},
    slug: { type: String, slug: 'nameProduct' , unique:true }
  },{timestamps: true});


  module.exports = mongoose.model('Products',Product)