const mongoose = require('mongoose')
const {Schema, model} = mongoose

const useSchema = new Schema({
    username: {
       type: String,
    //    unique: true,
    //    required: true,
    },
    password: {
        type: String,
        required: true
    }
})

useSchema.methods.encryPassword=()=>{

}

useSchema.methods.comparedPassword=()=>{

}

module.exports = model('useSchema', useSchema)
