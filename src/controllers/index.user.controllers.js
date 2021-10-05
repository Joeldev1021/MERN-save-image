const ctrlUser = {}
const jwt = require('jsonwebtoken')
const createError = require('http-errors')
const User = require('../models/UserSchema')


ctrlUser.getProfile =async(req, res) =>{
   // res.json("signup")//singUp is first user in the application
    res.json({user:req.user})
}

ctrlUser.singUp = async (req, res)=> {
    const {username, email, password} = req.body
    const user = await User.findOne({username})
    if(!user) {
        const user = await new User({username, email})
        user.password = await user.encryPassword(password)
        const userSave = await user.save()
        const token = jwt.sign({id: userSave._id}, process.env.SECRET_TOKEN_KEY, {expiresIn: '1d'})
        return  res.json({token})
    }
    res.json('username already exists')
}

ctrlUser.renderSingInForm = async(req, res)=> { 
    const user = await User.find()
    console.log(user) 
    res.json(user)
}

ctrlUser.singIn=async(req, res, next)=>{   
    try {
        const user = await User.findOne({username :req.body.username})
        if(!user) throw createError.Unauthorized("the user does not exists")
    
        if(user){
          const validatePassword = await user.comparedPassword(req.body.password)

           if(!validatePassword) throw createError.Unauthorized("invalid Password")

            const token = jwt.sign({id: user.id}, process.env.SECRET_TOKEN_KEY, {expiresIn: '1d'})
            return  res.json({token: token})
        }   
    } catch (error) {
        next(error)
    }
      
}

ctrlUser.logout=async(req, res)=>{
    const autToken = req.headers["authorization"]
    const logout = await jwt.sign({autToken}, 'logout', {expiresIn: 1})

    console.log(logout)
    res.json(logout)
}


module.exports= ctrlUser