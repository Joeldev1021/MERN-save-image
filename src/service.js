const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/red-img-tools',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=>console.log('conect db'))


module.exports = mongoose