const express = require("express");
const cartRouter = express.Router();
const cart = require("../model/Cart");
const products = require("../model/products");


//add to Cart
cartRouter.post("/", (req, res, next) => {
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
    let cartData = req.body.cart;

    cart.findOne({ user_id: cartData.userID })
        .then(async (data) => {
            // checking if document for a userid exist 
            if (!data) {
                // saving new document 
                let newItem = new cart({
                    user_id: cartData.userID,
                    product: [{
                        product_id: cartData.pID,
                        count: cartData.count
                    }],
                    tPrice: cartData.calculatedRent
                })
                newItem.save();
            } else {
                // tPrice from database + incoming tPrice
                let tPrice = data.tPrice + cartData.calculatedRent;
                // updating the document
                await cart.findOneAndUpdate({ user_id: cartData.userID },
                    {
                        $addToSet: {
                            product: [{
                                product_id: cartData.pID,
                                count: cartData.count
                            }]
                        },
                        $set: { tPrice: tPrice }
                    },
                    {
                        multi: true
                    })
            }
        })

})

// Cartdata when initialising
cartRouter.get("/:id", async (req, res, next) => {
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");



    // checking user in cart collection
    await cart.find({ user_id: req.params.id })
        .then(async (response) => {
            // to hold final data
            let cdata = new Array;
            // no.of days
            let count = []
            // response object
            let [obj] = response;
            // assigning object to data #destructing
            let data = obj.product

            await Promise.all(data.map((id) => {
                // no of days array
                count.push(id.count)
                return products.findOne({ _id: id.product_id })
                    .then(product => {
                        // push product object to cdata[]
                        cdata.push(product)
                    })
            }))
            // console.log(count)
            res.send({ 'data': cdata, 'tPrice': obj.tPrice, 'count': count });
        })

})


// cart delete
cartRouter.post("/delete", async (req, res) => {
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
    let { count, tPrice, pId, userID } = req.body;

    // user match,delete product,update price
    cart.updateMany({ user_id: userID },
        {
            $pull: {
                product: {
                    'product_id': pId,
                    'count': count
                }
            },
            $set: {
                // product:[{count:0}],
                tPrice: tPrice
            }
        },
        {
            multi: true
        })
        .then()  //then returns the promise 
})

// cart delete all
cartRouter.post('/deleteall', (req, res) => {
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
    let userID = req.body.userID;

    cart.updateMany({ user_id: userID },
        {
            $set: {
                product: [],
                tPrice: 0
            }

        },
        {
            multi: true
        })
        .then()
})



module.exports = cartRouter;