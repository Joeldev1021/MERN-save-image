const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { errorMiddleware } = require('./middleware/errorMiddleware');
const { fileUploadImage } = require('./middleware/fileUpload');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;
// export server conect database
require('./service');
// export router
const indexRoute = require('./routes/index');

// midleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/// uplaod imgaes
app.use(fileUploadImage);

// routes
app.use(indexRoute);
app.use(errorMiddleware);

// listen
const server = app.listen(PORT, () => {
	console.log(`app listening at ${PORT}`);
});

module.exports = { app, server };
