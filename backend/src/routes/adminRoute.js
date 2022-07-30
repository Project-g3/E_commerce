const express = require('express');
const bodyparser = require('body-parser')
const cors = require('cors');
const ProductData = require('../model/products');

const adminRouter = new express();


adminRouter.use(cors());

// Setting body parser
adminRouter.use(bodyparser.json());



    adminRouter.get('/',(req,res)=>{
      res.header("Access-Control-Allow-Orgin","*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
      ProductData.find()
      .then((data)=>{
        res.send(data);
      });


      });



module.exports = adminRouter;