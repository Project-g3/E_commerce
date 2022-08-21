const mongoose = require("mongoose")
// require("dotenv").config();

mongoose.connect("mongodb+srv://group3:group3@cluster0.hyotslj.mongodb.net/?retryWrites=true&w=majority",
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
    });

const schema = mongoose.Schema;

const CartItems = new schema({
    user_id: String,
    product:[{
        product_id:String,
        count:Number
    }],
    start_date: String,
    end_date: String,
    payment_status: Boolean,
    tPrice:Number
});

const Cart = mongoose.model("Cart",CartItems);

module.exports = Cart;
