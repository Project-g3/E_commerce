const express = require('express');
var passport = require("passport");
// const bodyparser = require('body-parser');
const cors = require('cors');
// for session
const session = require("express-session");
// mainRouter
var routes = require('./src/routes/mainRouter');
// mongoStore for session
const MongoStore = require("connect-mongodb-session")(session);
//setting routes const
const adminRoute = require('./src/routes/adminRoute');

const app = new express();

// test env file
require("dotenv").config();

// for connecting with frontend
app.use(cors());

// Session store
const sessionStore = new MongoStore({
  uri: process.env.DB_STRING,
  collection: 'session'
});
// Session Middleware 
app.use(session({
  secret: process.env.SECRET,
  //for every request create new session
  resave: false,
  //not modified session, do not save
  saveUninitalized: true,
  //use sessionStore for storing
  store: sessionStore,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24//equals 1 day expiry
  }
}));

// Need to require the entire Passport config module to root
require("../backend/src/config/passport");

// intitlise passport middleware every single time
app.use(passport.initialize());
// passport use session object
app.use(passport.session());

// Imports all of the routes from ./routes
app.use(routes);

// Setting body parser
// app.use(bodyparser.json());

// Routing
app.use('/admin-dash',adminRoute);


app.get('/',(req,res)=>{
  res.header("Access-Control-Allow-Orgin","*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
  res.send('working fine');
});

app.listen(3210);
console.log('the server is running on port:3210');