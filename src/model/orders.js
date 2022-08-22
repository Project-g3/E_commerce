const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://group3:group3@cluster0.hyotslj.mongodb.net/?retryWrites=true&w=majority');

// creating a schema for products

var schema = mongoose.Schema;

const orders = new schema({
    orderId : String,
    customerId : String,
    customerName: String,
    customerNumber : Number,
    customerEmailId : String,
    price : Number,
    productId : String,
    modeOfPurchase : String, // rent or buy
    fromDate : String,       // rent start date
    toDate : String,         // rent end date
    confirm : Boolean,

});

var orderData = mongoose.model('order',orders);
module.exports = orderData;


