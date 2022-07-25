const express = require('express');
const cors = require('cors');

const adminRouter = new express();

function router(){

    adminRouter.get('/',(req,res)=>{
        res.send('working fine');
      });
}