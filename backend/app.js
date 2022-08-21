const express = require('express');
const cors = require('cors');
// mainRouter
var routes = require('./src/routes/mainRouter');
// ne express
const app = new express();

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

app.listen(3210, () => {
  console.log("app running on http://localhost:3210/")
})