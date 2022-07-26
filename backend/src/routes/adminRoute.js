const express = require('express');
const cors = require('cors');
const ProductData = require('../model/products');

const adminRouter = new express();

function router(){

    adminRouter.get('/',(req,res)=>{
      ProductData.find()
      .then((data)=>{
        res.send(data);
      });


      });


      return adminRouter;
}

module.exports = router();