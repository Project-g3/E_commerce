const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const genPassword = require('../lib/passwordUtils').genPassword;
const validPassword = require('../lib/passwordUtils').validPassword;
const user = require("../model/UserModel");
const isAuth= require("./authMiddleware").isAuth;


// TODO
router.post('/login', (req, res, next) => {
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
    let userData = req.body.userData;
    console.log(userData)
    user.findOne({email:userData.email})
    .then((user)=>{
        if(!user){
            res.status(401).send('invald User')
        }
        if (!validPassword(userData.password, user.hash, user.salt))
        {
            res.status(401).send('invald User')

        }
        else
        {   
            let isadmin = user.admin;
            let payload = {subject:userData.email+userData.password}
            let token = jwt.sign(payload,'secretKey')
            res.status(200).send({token,isadmin});
        }
    })

});

// TODO
router.post('/register', (req, res, next) => {
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
    console.log(req.body);
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
    });

    newUser.save();
});


/**
* -------------- GET ROUTES ----------------
*/

router.get('/home', (req, res, next) => {
    res.send('<h1>Home</h1><p>Please <a href="/register">register</a></p>');
});


// isAuth check if a user is logged in
router.get('/protected-route',isAuth, (req, res, next) => {
     res.send("protected")

});
// admin check 
router.get('/admin',(req, res, next) => {
    res.send("admin !!!!!!!!!!!!!!")

});

// Visiting this route logs the user out
router.get('/logout', (req, res, next) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        console.log("logged out!");
    });


});

router.get('/login-success', isAuth,(req, res, next) => {
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
    console.log("logged in!") 
})


router.get('/login-failure', (req, res, next) => {
    res.send('You entered the wrong password.');
});

module.exports = router;

