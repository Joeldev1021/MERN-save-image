const express = require('express')
const morgan = require('morgan')
const path = require('path')
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

//export server conect database 
require('./service')

//export router
const imgRoutes = require('./routes/img.routes')
const userRoutes = require('./routes/user.routes')
const noteRoutes = require('./routes/note.routes')
const likeRoutes = require('./routes/like.routes')
const comentRoutes = require('./routes/coment.routes')

//midleware 
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({extended:false}))
//app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir:'./src/tmp/',
}));


//routes 
app.use(userRoutes)
app.use(noteRoutes)
app.use(imgRoutes)
app.use(likeRoutes)
app.use(comentRoutes)

//error
app.use((err, req, res, next) => {
    res.status(err.status|| 500)
    res.send({ 
        status: err.status|| 500,
        message: err.message
    })
})

//listen
app.listen(port, ()=>{
    console.log('app listening at ', port)
})
