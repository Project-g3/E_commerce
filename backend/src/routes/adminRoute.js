const express = require('express');
const bodyparser = require('body-parser')
const cors = require('cors');
const ProductData = require('../model/products');

const adminRouter = new express();


adminRouter.use(cors());

// Setting body parser
adminRouter.use(bodyparser.json());


  // for getting all products
    adminRouter.get('/',(req,res)=>{
      res.header("Access-Control-Allow-Orgin","*");
      res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
      ProductData.find()
      .then((data)=>{
        res.send(data);
      });


      });

  //for inserting products 
    adminRouter.post('/addProducts',(req,res)=>{
      res.header("Access-Control-Allow-Orgin","*");
      res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
      console.log(req.body.product);

      let items = {
        id: req.body.product.productId,
        name: req.body.product.productName,
        price: req.body.product.productPrice,
        shortDesc: req.body.product.shortDesc,
        desc: req.body.product.longDesc,
        imgUrl: req.body.product.imgUrl,
        category: req.body.product.productCategory,
        brand: req.body.product.productBrand

      }
      let data = ProductData(items);
      data.save();
    })  



module.exports = adminRouter;