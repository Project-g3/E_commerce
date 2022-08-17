const mongoose = require("mongoose")
require("dotenv").config();

mongoose.connect("mongodb+srv://group3:group3@cluster0.hyotslj.mongodb.net/?retryWrites=true&w=majority",
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
    });

const schema = mongoose.Schema;

const CartItems = new schema({
    user_id: String,
    product:[String],
    start_date: String,
    end_date: String,
    payment_status: Boolean,
});

const Cart = mongoose.model("Cart",CartItems);

module.exports = Cart;
