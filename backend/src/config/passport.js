const passport = require("passport");
// for local auth
const LocalStrategy = require("passport-local").Strategy;
const User =require("../model/UserModel");
const validPassword = require("../lib/passwordUtils").validPassword;

// const customField = {
//     usernameField : "login.email",
//     passwordField : "login.password"
// }


const verifyCallback = (username, password, done)=>{
    User.findOne({username:username})
    .then((user)=>{
        if(!user){return done(null,false)}

        const isValid = validPassword(password,user.hash, user.salt)

        if(isValid){
            return done(null, user);
        }else{
            return done(null, false);
        }

    })
    .catch((err)=>{
        done(err);
    })
}

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);