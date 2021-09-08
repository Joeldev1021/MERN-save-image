const express = require('express')
const morgan = require('morgan')
const hbs = require('handlebars')
const exhbs = require('express-handlebars')
const path = require('path')
const multer = require('multer')
const app = express()
const dotenv = require('dotenv').config()

//config multer
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname, 'public/upload/img'));
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now() + path.extname(file.originalname));
    }
})
//export server conect database 
require('./service')

//export router
const imgRoutes = require('./routes/img.routes')
const userRoutes = require('./routes/user.routes')

//settings 
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exhbs ({
   defaultLayout: 'main',
   layoutsDir: path.join(__dirname, 'views/layouts'),
   partialsDir: path.join(__dirname, 'views/partials'),
   extname: '.hbs'
}))


app.set('view engine', '.hbs')
//midleware 
app.use(multer({dest:path.join(__dirname, 'public/upload/img') ,storage}).single('image'))
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
//routes 

app.use('/user', userRoutes)
app.use('/img', imgRoutes)


//listen
app.listen(3000, ()=>{
    console.log('app listening at ', 3000)
})