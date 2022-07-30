const express = require('express');
// const bodyparser = require('body-parser');
const cors = require('cors');

//setting routes const
const adminRoute = require('./src/routes/adminRoute');


const app = new express();

// for connecting with frontend
app.use(cors());

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