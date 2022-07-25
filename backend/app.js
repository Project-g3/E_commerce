const express = require('express');
const cors = require('cors');

const app = new express();




// for connecting with frontend
app.use(cors);



app.get('/',(req,res)=>{
  res.send('working fine');
});

app.listen(3000);
console.log('the server is running on port:3000');