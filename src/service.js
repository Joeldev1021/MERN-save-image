const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:3000/red-tools-image',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(res=console.log('conect db'))


module.exports = mongoose