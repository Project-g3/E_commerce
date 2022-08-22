const userRouter =require("express").Router();
const user = require("../model/UserModel");
const genPassword = require('../lib/passwordUtils').genPassword;
const cors = require('cors');

userRouter.use(cors());

// updte user
userRouter.post('/update', (req, res) => {
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
    let newData = req.body.newData;
    let userID = req.body.userID;

    const saltHash = genPassword(newData.password);

    var salt = saltHash.salt;
    var hash = saltHash.hash;


    user.findByIdAndUpdate(userID, {
        $set: {
            name: newData.name,
            email: newData.email,
            age: newData.age,
            phoneNumber: newData.phoneNumber,
            hash: hash,
            salt: salt
        }
    })
        .then()
})

// user-dashboard
userRouter.get('/getUser/:id', (req, res) => {
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
    let id = req.params.id;
    user.findById(id)
        .then((response) => {
            res.send(response)
        })
})


module.exports = userRouter;
