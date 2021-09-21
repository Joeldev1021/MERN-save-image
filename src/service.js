const mongoose = require('mongoose')

const API_URI=` mongodb+srv://joeluser:${process.env.PASSWORD_DB}@cluster0.m8z6c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(API_URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify:true
}).then(()=>console.log('conect db'))


module.exports = mongoose