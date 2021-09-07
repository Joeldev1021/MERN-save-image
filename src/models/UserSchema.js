const mongoose = require('mongoose')
const {Schema, model} = mongoose
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
       type: String,
    //    unique: true,
         required: true,
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.methods.encryPassword=(password)=>{
    const newPassword = bcrypt.hash(password, 10)
    return newPassword
};

userSchema.methods.comparedPassword=(password)=>{

    return bcrypt.compare(password, this.password)

}

module.exports = model('userSchema', userSchema)
