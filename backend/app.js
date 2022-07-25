const express = require('express');
const cors = require('cors');

//setting routes const
const adminRoute = require('./src/routes/adminRoute');


const app = new express();

// for connecting with frontend
// app.use(cors);


// Routing
app.use('/admin-dash',adminRoute);


app.get('/',(req,res)=>{
  res.send('working fine');
});

app.listen(3210);
console.log('the server is running on port:3210');