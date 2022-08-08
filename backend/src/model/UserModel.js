const mongoose = require("mongoose");


require("dotenv").config();

const conn = process.env.DB_STRING;

// connecting database
 mongoose.connect(conn,{

    //underlying MongoDB driver has deprecated their current connection string parser. Because this is a major change, they added the useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser. You should set useNewUrlParser: true unless that prevents you from connecting.
    useNewUrlParser: true,

    // False by default, MongoDB driver's new connection management engine
    useUnifiedTopology: true
});

// User Schema
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    address:String,
    phoneNumber:Number,
    hash:String,//for passport
    salt:String //for passport
});

//modelfor User
const User = mongoose.model("User",UserSchema);

module.exports = User;
