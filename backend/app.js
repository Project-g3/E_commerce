const express = require('express');
const cors = require('cors');
// mainRouter
var routes = require('./src/routes/mainRouter');
//setting routes const
const adminRoute = require('./src/routes/adminRoute');

const app = new express();
const port = process.env.PORT || 3210;

// test env file
require("dotenv").config();

//convert request body to JSON.
app.use(express.json());
//convert url
app.use(express.urlencoded({ extended: true }));

// for connecting with frontend
app.use(cors());
// Imports all of the routes from ./routes
app.use(routes);

// Routing
app.use('/admin-dash',adminRoute);

app.listen(port, () => {
  console.log("app running on "+port);
})