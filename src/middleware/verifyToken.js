const jwt = require('jsonwebtoken')
const User = require('../models/UserSchema')

const veryToken =async(req, res,next)=>{
    
    const token = req.headers.authorization

    if(!token) res.json('not token provided')
    
     if(token){
       const userId =  jwt.verify(token, process.env.SECRET_TOKEN_KEY)
       const user = await User.findById(userId.id)
       req.token = token
       console.log('very token')
       next()
     }
    
}

module.exports = veryToken