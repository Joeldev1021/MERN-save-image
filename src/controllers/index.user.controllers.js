const ctrlUser = {}
const jwt = require('jsonwebtoken')
const User = require('../models/UserSchema')

ctrlUser.renderSignUpForm = (req, res) =>{
    res.render("signup")//singUp is first user in the application
}

ctrlUser.singUp = async (req, res)=>{
     const user = await new User(req.body)
     user.password = await user.encryPassword(req.body.password)
     await user.save()
     res.render('signIn')
}

ctrlUser.renderSingInForm = async(req, res)=>{  
    res.render('signIn')
}

ctrlUser.singIn=async(req, res)=>{
    const username = req.body.username
    const user = await User.findOne({username})
    if(!user) {
      return res.json('user not found')
    }
    if(user) {
      const isPassword = await user.comparedPassword(req.body.password)
      if(isPassword){
       const token = jwt.sign({id:user._id }, process.env.SECRET_TOKEN_KEY , {
              expiresIn: 60*60*24, //24 hours
          })
         return res.json({auth: true, token})
      }
     return res.json('data is incorret')
    }
    
}

ctrlUser.logout=(req, res)=>{
    res.json('logout thanks')
}


module.exports= ctrlUser