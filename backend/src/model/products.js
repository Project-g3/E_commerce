const mongoose = require('mongoose');

mongoose.connect(process.env.DB_STRING);

// creating a schema for products

var schema = mongoose.Schema;``

const products = new schema({
    id : String,
    name : String,
    price : Number,
    shortDesc : String,
    desc : String,
    imgUrl : String,
    category : String,
    brand : String

});

var productData = mongoose.model('product',products);

module.exports = productData;


