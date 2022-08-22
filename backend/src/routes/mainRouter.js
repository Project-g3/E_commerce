const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const genPassword = require('../lib/passwordUtils').genPassword;
const validPassword = require('../lib/passwordUtils').validPassword;
const cors = require('cors');
const user = require("../model/UserModel");
const adminRoute = require('./adminRoute');
const cartRoute = require("./cartRoute")
const userRoute = require("./userRouter")
const auth = require("./authMiddleware").isAuth


router.use('/admin-dash',adminRoute);
router.use('/cart',auth,cartRoute);
router.use('/user',auth,userRoute);

router.use(cors());

// Login 
router.post('/login', (req, res, next) => {
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
    // user inputed data
    let userData = req.body.userData;

    // checking if the entered email exist in database
    user.findOne({email:userData.email})
    .then((user)=>{
        // no user
        if(!user){
            res.send({invalid:'invald Credential'})
        }
        // valid function is checked with the hash and salt-password 
        else if(!validPassword(userData.password, user.hash, user.salt))
        {
            res.send({ invalid: 'invald Credential' })
        }
        else
        {   
            // assigining admin boolen
            let isadmin = user.admin;
            let userID=user._id;
            let user_name=user.name;
            // payload for jwt
            let payload = {subject:userData.email+userData.password}
            // token creation useing sign function
            let token = jwt.sign(payload,'secretKey')
            res.status(200).send({token,isadmin,userID,user_name});
        }
    })

});

// Register
router.post('/register', (req, res, next) => {
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
    const saltHash = genPassword(req.body.user.password);

    var salt = saltHash.salt;
    var hash = saltHash.hash;

    const newUser = new user({
        name: req.body.user.name,
        email:req.body.user.email,
        age:req.body.user.age,
        phoneNumber: req.body.user.phoneNumber,
        hash: hash,
        salt: salt,
        admin:false
    })

    newUser.save();
});

module.exports = router;

