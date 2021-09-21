const ctrlUser = {}
const jwt = require('jsonwebtoken')
const User = require('../models/UserSchema')


ctrlUser.renderSignUpForm =async(req, res) =>{
   // res.json("signup")//singUp is first user in the application
   
   res.json('form')
}

ctrlUser.singUp = async (req, res)=> {
    const {username, email, password} = req.body
    const user = await User.findOne({username})
    if(!user) {
        const user = await new User({username, email})
        user.password = await user.encryPassword(password)
        await user.save()
        console.log(user)
        return res.json(user)
    }
    res.json('username already exists')
}

ctrlUser.renderSingInForm = async(req, res)=> { 
    const user = await User.find()
    console.log(user) 
    res.json(user)
}

ctrlUser.singIn=async(req, res)=>{   
    const user = await User.findOne({username :req.body.username})
    if(!user) res.json('user not found')

    if(user){
      const validatePassword = await user.comparedPassword(req.body.password)
      console.log(validatePassword)
       if(validatePassword){
        const token = jwt.sign({id:user.id}, process.env.SECRET_TOKEN_KEY, {expiresIn: '1d'})
        return  res.json({token: token})
       } 
       return res.json('username or password is incorret')
    }  
}

ctrlUser.logout=async(req, res)=>{
    const autToken = req.headers["authorization"]
    const logout = await jwt.sign({autToken}, 'logout', {expiresIn: 1})

    console.log(logout)
    res.json(logout)
}


module.exports= ctrlUser