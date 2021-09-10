const jwt = require('jsonwebtoken')
const User = require('../models/UserSchema')

var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

const veryToken =async(req, res,next)=>{
    const token =  localStorage.getItem('token')
    //console.log(token)
    if(!token) res.redirect('/user/signup')
    
     if(token){
       const userId =  jwt.verify(token, process.env.SECRET_TOKEN_KEY)
       const user = await User.findById(userId.id)
       req.token = token
       console.log('very token')
       next()
     }
    
}

module.exports = veryToken