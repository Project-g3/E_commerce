const router = require("express").Router();
const passport = require("passport");
const genPassword = require('../lib/passwordUtils').genPassword;
const user = require("../model/UserModel");


// TODO
router.post('/login', passport.authenticate('local',
{ 
    failureRedirect: "/login-failure",
    successRedirect: "/login-sucess" 
}));

// TODO
router.post('/register', (req, res, next) => {
    const saltHash = genPassword(req.body.password);

    var salt = saltHash.salt;
    var hash = saltHash.hash;

    const newUser = new user({
        name: req.body.username,
        hash: hash,
        salt: salt
    });

    newUser.save();
    res.redirect("/login");
});


/**
* -------------- GET ROUTES ----------------
*/

router.get('/home', (req, res, next) => {
    res.send('<h1>Home</h1><p>Please <a href="/register">register</a></p>');
});

// When you visit http://localhost:3000/login, you will see "Login Page"
router.get('/login', (req, res, next) => {

    const form = '<h1>Login Page</h1><form method="POST" action="/login">\
    Enter Username:<br><input type="text" name="username">\
    <br>Enter Password:<br><input type="password" name="password">\
    <br><br><input type="submit" value="Submit"></form>';

    res.send(form);

});

// When you visit http://localhost:3000/register, you will see "Register Page"
router.get('/register', (req, res, next) => {

    const form = '<h1>Register Page</h1><form method="POST" action="/register">\
                    Enter Username:<br><input type="text" name="username">\
                    <br>Enter Password:<br><input type="password" name="password">\
                    <br><br><input type="submit" value="Submit"></form>';

    res.send(form);

});

/**
 * Lookup how to authenticate users on routes with Local Strategy
 * Google Search: "How to use Express Passport Local Strategy"
 * 
 * Also, look up what behaviour express session has without a maxage set
 */
router.get('/protected-route', (req, res, next) => {
    if (req.isAuthenticated()) {
        res.send('<h1>You are authenticated</h1><p><a href="/logout">Logout and reload</a></p>');
    } else {
        res.send('<h1>You are not authenticated</h1><p><a href="/login">Login</a></p>');
    }

    // This is how you check if a user is authenticated and protect a route.  You could turn this into a custom middleware to make it less redundant

});

// Visiting this route logs the user out
router.get('/logout', (req, res, next) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });


});

router.get('/login-success', (req, res, next) => {
    res.send('<p>You successfully logged in. --> <a href="/protected-route">Go to protected route</a></p>');
});

router.get('/login-failure', (req, res, next) => {
    res.send('You entered the wrong password.');
});

module.exports = router;

