const cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const cloudinaryFunc = async (img)=> {
   const res = await cloudinary.uploader.upload(img)
   return res
}

module.exports ={
    cloudinaryFunc
}