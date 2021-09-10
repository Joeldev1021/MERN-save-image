const ctrlUser = {}


const User = require('../models/UserSchema')


ctrlUser.renderSignUpForm = (req, res) =>{
    res.render("signup")//singUp is first user in the application
}

ctrlUser.singUp = async (req, res)=>{

}

ctrlUser.renderSingInForm = async(req, res)=>{  
    res.render('signIn')
}

ctrlUser.singIn=async(req, res)=>{
   
    
}

ctrlUser.logout=(req, res)=>{
    res.json('logout thanks')
}


module.exports= ctrlUser