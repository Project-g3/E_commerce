const mongoose = require('mongoose');



var schema = mongoose.Schema;

mongoose.connect(process.env.DB_STRING);


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


