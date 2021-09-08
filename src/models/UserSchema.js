const mongoose = require('mongoose')
const {Schema, model} = mongoose
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
       type: String,
    //    unique: true,
         required: true,
    },
    email: {
        type: String,
        require:true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps :{
        createdAt: 'created_at'
    }
})

userSchema.methods.encryPassword=(password)=>{
    const newPassword = bcrypt.hash(password, 10)
    return newPassword
};

userSchema.methods.comparedPassword = function (password){
    console.log(this.password)
    console.log(password)
    return bcrypt.compare(password, this.password)

}

module.exports = model('userSchema', userSchema)
