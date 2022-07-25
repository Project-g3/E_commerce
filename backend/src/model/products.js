const mongoose = require('mongoose');

mongoose.connect('https://localhost:27017/Camerent');

// creating a schema for products

const schema = mongoose.Schema;

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

const productData = mongoose.model('product',products);

module.exports = productData;


