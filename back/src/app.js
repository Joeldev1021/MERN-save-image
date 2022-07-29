const express = require("express");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
const { errorMiddleware } = require("./middleware/errorMiddleware");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
// export server conect database
require("./service");
const indexRoutes = require("./routes/index");
// export router

// midleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "./src/tmp/"
}));

// routes
app.use(indexRoutes);

// error
app.use(errorMiddleware);

// listen
app.listen(port, () => {
  console.log("app listening at ", port);
});
