const jwt = require('jsonwebtoken');

module.exports.isAuth = (req, res, next)=>{
    // checking if headers exist(token)
    if(!req.headers.authorization){
    
        return res.status(401).send(" unauthersied")
    } 
    // token split to token value only(avoid Bearer part)
    let token =req.headers.authorization.split(' ')[1];
    if(token=="null"){
        return res.status(401).send(" unauthersied")
    }
    
    let payload = jwt.verify(token,'secretKey')

    if(!payload){
        return res.status(401).send(" unauthersied")
    }
    req.userId=payload.subject;
    next()
    
}