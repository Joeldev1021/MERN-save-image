const express = require('express')
const morgan = require('morgan')
const path = require('path')
const multer = require('multer')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

//config multer
// const storage = multer.diskStorage({
//     destination: (req, file, cb)=>{
//         cb(null, path.join(__dirname, 'public/upload/img'));
//     },
//     filename: (req, file, cb)=>{
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// })
//export server conect database 
require('./service')

//export router
//const imgRoutes = require('./routes/img.routes')
const userRoutes = require('./routes/user.routes')
const noteRoutes = require('./routes/note.routes')



//app.set('view engine', '.hbs')
//midleware 
//app.use(multer({dest:path.join(__dirname, 'public/upload/img') ,storage}).single('image'))
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({extended:false}))
//app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
//routes 

app.use(userRoutes)
app.use(noteRoutes)

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
