// nodejs inbulid crypto for cryptography
const crypto = require("crypto");
const passport = require("passport")
const User= require("../model/UserModel")

// generate salt and hash for given password
function genPassword(password) {
    var salt = crypto.randomBytes(32).toString("hex");
    var genHash = crypto.pbkdf2Sync(password,salt,10000,64,"sha512").toString("hex");
    return{
        salt:salt,
        hash:genHash
    }
};

// validate
function validPassword(password, hash , salt){
    var hashVerify = crypto.pbkdf2Sync(password,salt,10000,64,'sha512').toString('hex');
    return hash===hashVerify;
};


module.exports.validPassword = validPassword;
module.exports.genPassword = genPassword;

// initialise id by password
passport.serializeUser((user, done) => {
    done(null, user.id);
})


passport.deserializeUser((userId, done) => {
    User.findById(userId)
        .then((user) => {
            done(null, user);
        })
        .catch(err => done(err))
});