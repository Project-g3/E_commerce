const express = require('express');
const bodyparser = require('body-parser')
const cors = require('cors');
const ProductData = require('../model/products');
const productData = require('../model/products');

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

  // For getting single product
    adminRouter.get('/:id',(req,res)=>{
      console.log(req.params.id);
      productData.find({_id:req.params.id})
      .then((data)=>{
        res.send(data);
      })
    })

  // For Updating single product
  adminRouter.post('/updateProduct',(req,res)=>{
    res.header("Access-Control-Allow-Orgin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
    // console.log(req.body.product);

    let items = {
      id: req.body.product.id,
      name: req.body.product.name,
      price: req.body.product.price,
      shortDesc: req.body.product.shortDesc,
      desc: req.body.product.desc,
      category: req.body.product.category,
      brand: req.body.product.brand

    }
    ProductData.updateOne({_id:req.body.product._id},
      {$set:
        {
          name:items.name,
          price:items.price,
          shortDesc:items.shortDesc,
          desc:items.desc,
          category:items.category,
          brand:items.brand

        }})
    .then((result)=>{
      // console.log(result);
    })
  }) 



module.exports = adminRouter;