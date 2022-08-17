const mongoose = require("mongoose")
require("dotenv").config();

mongoose.connect(process.env.DB_STRING,
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
