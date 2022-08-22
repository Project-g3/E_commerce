const mongoose = require('mongoose');



var schema = mongoose.Schema;

mongoose.connect("mongodb+srv://group3:group3@cluster0.hyotslj.mongodb.net/?retryWrites=true&w=majority");


const products = new schema({
    id : String,
    name : String,
    price : Number,
    shortDesc : String,
    desc : String,
    imgUrl : String,
    category : String,
    brand : String,
    imagesUrl: []

});

var productData = mongoose.model('product',products);

module.exports = productData;


